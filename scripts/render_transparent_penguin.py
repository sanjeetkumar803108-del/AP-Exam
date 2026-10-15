import os
import sys
import time
import shutil
import subprocess
import numpy as np
from PIL import Image
from rembg import remove, new_session

def round_wing_edges(alpha, w, h):
    # Smooth rounded contour at right edge of scaled content
    # When the penguin raises his wing to maximum extension,
    # round off the cut boundary into an organic wing tip
    right_ys = np.where(alpha[:, w - 1] > 30)[0]
    if len(right_ys) > 5:
        y_min, y_max = right_ys.min(), right_ys.max()
        y_mid = (y_min + y_max) / 2.0
        ry = (y_max - y_min) / 2.0
        rx = min(22.0, ry * 0.75)
        for y in range(y_min, y_max + 1):
            dy = abs(y - y_mid) / ry
            if dy <= 1.0:
                dx = rx * (1.0 - np.sqrt(max(0.0, 1.0 - dy**2)))
                cutoff = (w - 1) - dx
                for x in range(int(cutoff), w):
                    dist = x - cutoff
                    if dist > 1.5:
                        alpha[y, x] = 0
                    else:
                        alpha[y, x] *= max(0.0, 1.0 - dist / 1.5)

    # Smooth rounded contour at left edge
    left_ys = np.where(alpha[:, 0] > 30)[0]
    if len(left_ys) > 5:
        y_min, y_max = left_ys.min(), left_ys.max()
        y_mid = (y_min + y_max) / 2.0
        ry = (y_max - y_min) / 2.0
        rx = min(22.0, ry * 0.75)
        for y in range(y_min, y_max + 1):
            dy = abs(y - y_mid) / ry
            if dy <= 1.0:
                dx = rx * (1.0 - np.sqrt(max(0.0, 1.0 - dy**2)))
                cutoff = dx
                for x in range(0, int(cutoff) + 1):
                    dist = cutoff - x
                    if dist > 1.5:
                        alpha[y, x] = 0
                    else:
                        alpha[y, x] *= max(0.0, 1.0 - dist / 1.5)
    return alpha

def main():
    start_time = time.time()
    work_dir = r"C:\Users\VICTUS\Ai\AP-Exam\scripts\temp_frames"
    os.makedirs(work_dir, exist_ok=True)
    
    import glob
    master_candidates = glob.glob(r"C:\Users\VICTUS\Downloads\Baby_penguin*.mp4")
    if master_candidates:
        input_video = master_candidates[0]
        start_trim = "00:00:02.0"
        print(f"Found master 10s video: {input_video}. Trimming front 2.0s (-ss {start_trim})...")
    else:
        input_video = r"C:\Users\VICTUS\Ai\AP-Exam\public\welcome-penguin.mp4"
        start_trim = "00:00:00.5"
        print(f"Using public video: {input_video}. Trimming front 0.5s (-ss {start_trim})...")
    raw_frames_dir = os.path.join(work_dir, "raw")
    nobg_frames_dir = os.path.join(work_dir, "nobg")
    
    if os.path.exists(raw_frames_dir):
        shutil.rmtree(raw_frames_dir)
    if os.path.exists(nobg_frames_dir):
        shutil.rmtree(nobg_frames_dir)
        
    os.makedirs(raw_frames_dir, exist_ok=True)
    os.makedirs(nobg_frames_dir, exist_ok=True)
    
    # 1. Extract raw frames cutting 0.5s more (start_trim)
    print(f"[1/4] Extracting frames starting after {start_trim} at 24fps...")
    extract_cmd = [
        "ffmpeg", "-y",
        "-ss", start_trim,
        "-i", input_video,
        "-vf", "scale=540:960",
        "-r", "24",
        os.path.join(raw_frames_dir, "frame_%04d.png")
    ]
    subprocess.run(extract_cmd, check=True)
    
    frame_files = sorted([f for f in os.listdir(raw_frames_dir) if f.endswith(".png")])
    total_frames = len(frame_files)
    print(f"[1/4] Extracted {total_frames} frames (duration: {total_frames / 24:.2f}s).")
    
    # 2. Use u2net model for 100% solid wing retention (no faded/ghost wings)
    print("[2/4] Initializing 'u2net' AI model for 100% solid, opaque wings...")
    session = new_session('u2net')
    
    # 3. Process every frame:
    # - Run background removal
    # - Boost alpha so wings never fade
    # - Sculpt wing edges into smooth rounded curves
    # - Zero out watermark star in bottom right
    # - Center on canvas with 0.92x scaling so wings never hit video boundaries
    print(f"[3/4] Processing {total_frames} frames with wing contouring & padding...")
    for idx, fname in enumerate(frame_files):
        raw_path = os.path.join(raw_frames_dir, fname)
        out_path = os.path.join(nobg_frames_dir, fname)
        
        with Image.open(raw_path) as raw_img:
            nobg = remove(raw_img, session=session).convert('RGBA')
            r, g, b, a = nobg.split()
            alpha = np.array(a, dtype=np.float32)
            h, w = alpha.shape
            
            # Boost soft alpha to ensure wings are 100% solid and never disappear
            alpha = np.where(alpha > 15, np.clip(255.0 * np.power(alpha / 255.0, 0.4), 0, 255), 0)
            
            # Zero out watermark star specifically (x: 425-485, y: 840-900), safely avoiding orange feet
            alpha[840:900, 425:485] = 0
            
            # Sculpt wing edges to avoid flat cuts
            alpha = round_wing_edges(alpha, w, h)
            
            cleaned_img = Image.merge('RGBA', (r, g, b, Image.fromarray(alpha.astype(np.uint8))))
            
            # Scale slightly (0.92x) and center on 540x960 canvas
            # This provides 22px of transparent margin on left and right,
            # ensuring the wings NEVER touch or clip against the video container!
            scaled_w = int(w * 0.92)
            scaled_h = int(h * 0.92)
            scaled = cleaned_img.resize((scaled_w, scaled_h), Image.LANCZOS)
            
            canvas = Image.new('RGBA', (w, h), (0, 0, 0, 0))
            ox = (w - scaled_w) // 2
            oy = (h - scaled_h) // 2
            canvas.paste(scaled, (ox, oy), scaled)
            canvas.save(out_path, "PNG")
            
        if (idx + 1) % 25 == 0 or (idx + 1) == total_frames:
            elapsed = time.time() - start_time
            print(f"  Processed {idx + 1}/{total_frames} frames ({((idx + 1)/total_frames)*100:.1f}%) in {elapsed:.1f}s")
            
    # 4. Encode to transparent WebM with audio (VP9 + alpha)
    print("[4/4] Encoding to transparent WebM with audio (VP9 + alpha)...")
    temp_webm = os.path.join(work_dir, "welcome-penguin.webm")
    encode_cmd = [
        "ffmpeg", "-y",
        "-r", "24",
        "-i", os.path.join(nobg_frames_dir, "frame_%04d.png"),
        "-ss", start_trim,
        "-i", input_video,
        "-map", "0:v:0",
        "-map", "1:a:0?",
        "-c:v", "libvpx-vp9",
        "-pix_fmt", "yuva420p",
        "-b:v", "1400k",
        "-auto-alt-ref", "0",
        "-c:a", "libopus",
        "-shortest",
        temp_webm
    ]
    subprocess.run(encode_cmd, check=True)
    
    # Also create trimmed MP4 fallback
    temp_mp4 = os.path.join(work_dir, "welcome-penguin.mp4")
    mp4_cmd = [
        "ffmpeg", "-y",
        "-ss", start_trim,
        "-i", input_video,
        "-c:v", "libx264",
        "-crf", "22",
        "-c:a", "aac",
        temp_mp4
    ]
    subprocess.run(mp4_cmd, check=True)
    
    output_webm = r"C:\Users\VICTUS\Ai\AP-Exam\public\welcome-penguin.webm"
    android_webm = r"C:\Users\VICTUS\Ai\AP-Exam\android\app\src\main\assets\public\welcome-penguin.webm"
    output_mp4 = r"C:\Users\VICTUS\Ai\AP-Exam\public\welcome-penguin.mp4"
    android_mp4 = r"C:\Users\VICTUS\Ai\AP-Exam\android\app\src\main\assets\public\welcome-penguin.mp4"
    
    shutil.copyfile(temp_webm, output_webm)
    shutil.copyfile(temp_webm, android_webm)
    shutil.copyfile(temp_mp4, output_mp4)
    shutil.copyfile(temp_mp4, android_mp4)
    
    print(f"SUCCESS! WebM & MP4 copied to public & android assets.")
    print(f"WebM size: {os.path.getsize(output_webm)} bytes")
    print(f"MP4 size: {os.path.getsize(output_mp4)} bytes")
    
    # Cleanup temp
    try:
        shutil.rmtree(raw_frames_dir)
        shutil.rmtree(nobg_frames_dir)
        if os.path.exists(temp_webm): os.remove(temp_webm)
        if os.path.exists(temp_mp4): os.remove(temp_mp4)
    except Exception as e:
        print("Note on cleanup:", e)
        
    print(f"All done in {time.time() - start_time:.1f}s!")

if __name__ == "__main__":
    main()

import os
from PIL import Image
import numpy as np
from rembg import remove, new_session

input_path = r"C:\Users\VICTUS\.gemini\antigravity-ide\brain\4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1\.user_uploaded\media_1791972544065.jpg"
img = Image.open(input_path).convert("RGB")
arr = np.array(img, dtype=np.float32)

# Try isnet-general-use
try:
    print("Testing isnet-general-use...")
    session_isnet = new_session('isnet-general-use')
    out_isnet = remove(img, session=session_isnet)
    out_isnet.save(r"C:\Users\VICTUS\Ai\AP-Exam\scripts\temp_frames\out_isnet.png")
    print("isnet done")
except Exception as e:
    print("isnet error:", e)

# Also let's inspect the exact background color profile across the entire perimeter
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
# Background is distinctly blue-tinted dark:
# Let's check where the background is by floodfill from border corners:
import cv2

# Compute blue-dominance or color distance to background
# Corners are pure background: (17, 22, 42) to (25, 25, 80)
# Note that cap is black/grey (r~=g~=b) and tassel is gold (r >> b)

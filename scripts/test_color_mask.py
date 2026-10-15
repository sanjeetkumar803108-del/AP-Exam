from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\VICTUS\.gemini\antigravity-ide\brain\4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1\.user_uploaded\media_1791972544065.jpg').convert("RGB")
arr = np.array(img, dtype=np.int32)
r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

# Background condition: dark blue gradient
is_bg = (b > 30) & (b - r > 10) & (b - g > 8)

# Foreground is NOT background
fg_mask = (~is_bg).astype(np.uint8) * 255

# Check if cap top (y=40, x=512) and tassel (y=300, x=880) are preserved
print("Cap top preserved in FG mask:", fg_mask[40, 512] == 255)
print("Cap center preserved in FG mask:", fg_mask[100, 512] == 255)
print("Tassel preserved in FG mask:", fg_mask[300, 880] == 255)
print("Background corner is BG:", fg_mask[10, 10] == 0)

# Save mask to inspect
mask_img = Image.fromarray(fg_mask)
mask_img.save(r"C:\Users\VICTUS\Ai\AP-Exam\scripts\temp_frames\color_mask.png")
print("Saved color_mask.png")

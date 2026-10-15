import cv2
import numpy as np
from PIL import Image

input_path = r'C:\Users\VICTUS\.gemini\antigravity-ide\brain\4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1\.user_uploaded\media_1791972544065.jpg'
img_bgr = cv2.imread(input_path)
h, w = img_bgr.shape[:2]
b, g, r = img_bgr[:, :, 0].astype(np.int32), img_bgr[:, :, 1].astype(np.int32), img_bgr[:, :, 2].astype(np.int32)

# Background condition: dark blue gradient
# b > 28 and b - r > 8 and b - g > 6
is_bg = (b > 26) & (b - r > 6) & (b - g > 5)

# Build a binary mask for flood fill: 255 for bg, 0 for fg
bg_seeds = is_bg.astype(np.uint8) * 255

# To ensure the seed floodfill finds the whole connected background:
# Flood fill from the border
mask_pad = np.zeros((h + 2, w + 2), np.uint8)
# We invert: 0 = background, 1 = foreground candidate
cv2.floodFill(bg_seeds, mask_pad, (0, 0), 128)
cv2.floodFill(bg_seeds, mask_pad, (w - 1, 0), 128)
cv2.floodFill(bg_seeds, mask_pad, (0, h - 1), 128)
cv2.floodFill(bg_seeds, mask_pad, (w - 1, h - 1), 128)

# Any pixel filled with 128 is connected background
true_bg = (bg_seeds == 128)

# Foreground is everything else
fg_mask = (~true_bg).astype(np.uint8) * 255

# Clean up any small edge noise:
# Find largest contour in fg_mask
contours, _ = cv2.findContours(fg_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
clean_fg = np.zeros((h, w), dtype=np.uint8)
if contours:
    # Fill largest contour (the penguin + cap + tassel)
    c = max(contours, key=cv2.contourArea)
    cv2.drawContours(clean_fg, [c], -1, 255, -1)

# Smooth the edge with slight feathering
blurred_mask = cv2.GaussianBlur(clean_fg, (5, 5), 0)

# Create pure white background composite
white_bg = np.ones((h, w, 3), dtype=np.uint8) * 255
alpha = (blurred_mask.astype(np.float32) / 255.0)[:, :, np.newaxis]

composite = (img_bgr.astype(np.float32) * alpha + white_bg.astype(np.float32) * (1.0 - alpha)).astype(np.uint8)

# Save results
cv2.imwrite(r"C:\Users\VICTUS\Ai\AP-Exam\scripts\temp_frames\refined_white.png", composite)

# Transparent PNG
rgba = np.dstack([img_bgr, blurred_mask])
rgba = cv2.cvtColor(rgba, cv2.COLOR_BGRA2RGBA)
Image.fromarray(rgba).save(r"C:\Users\VICTUS\Ai\AP-Exam\scripts\temp_frames\refined_transparent.png")

print("Done generating refined images!")

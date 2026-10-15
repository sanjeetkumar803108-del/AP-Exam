import os
from PIL import Image
import numpy as np
from rembg import remove, new_session

input_path = r"C:\Users\VICTUS\.gemini\antigravity-ide\brain\4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1\.user_uploaded\media_1791972544065.jpg"
output_png = r"c:\Users\VICTUS\Ai\AP-Exam\public\professor-pang.png"
output_white = r"c:\Users\VICTUS\Ai\AP-Exam\public\professor-pang-white.png"
android_png = r"c:\Users\VICTUS\Ai\AP-Exam\android\app\src\main\assets\public\professor-pang.png"
android_white = r"c:\Users\VICTUS\Ai\AP-Exam\android\app\src\main\assets\public\professor-pang-white.png"

print("1. Loading image and removing dark blue background...")
session = new_session('u2net')
with Image.open(input_path) as img:
    # Remove background with u2net
    nobg = remove(img, session=session).convert("RGBA")
    
    # Save transparent version
    nobg.save(output_png, "PNG")
    nobg.save(android_png, "PNG")
    print(f"Saved transparent to {output_png}")
    
    # Composite onto pure white background matching the app UI
    white_bg = Image.new("RGBA", nobg.size, (255, 255, 255, 255))
    white_composite = Image.alpha_composite(white_bg, nobg).convert("RGB")
    white_composite.save(output_white, "PNG")
    white_composite.save(android_white, "PNG")
    print(f"Saved white background to {output_white}")

print("Processing complete!")

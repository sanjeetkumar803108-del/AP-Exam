from PIL import Image
import numpy as np

img = Image.open(r'C:\Users\VICTUS\.gemini\antigravity-ide\brain\4759a8d6-1ffb-473b-b5c0-2dc9dc22f1b1\.user_uploaded\media_1791972544065.jpg')
arr = np.array(img, dtype=np.int32)
h, w, _ = arr.shape
print('Top-left (0,0):', arr[5, 5])
print('Top-right (0,w-1):', arr[5, w-6])
print('Mid-left background:', arr[400, 10])
print('Mid-right background:', arr[400, w-10])
print('Cap center (y=100, x=512):', arr[100, 512])
print('Cap top edge (y=40, x=512):', arr[40, 512])
print('Tassel ball (y=290, x=870):', arr[290, 870])
print('Tassel threads (y=380, x=880):', arr[380, 880])

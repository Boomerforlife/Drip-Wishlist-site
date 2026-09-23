from PIL import Image
import os

SRC_DIR = r"C:\Users\Vighnesh\dekstop\DR!P\BRAND guidlines\Drip_V1"
OUT_DIR = r"C:\Users\Vighnesh\dekstop\DR!P\Drip launch site\Drip Landing Page Component_v1\assets\hero"

os.makedirs(OUT_DIR, exist_ok=True)

# 8 posters covering the full vibe range, in cycle order
posters = [
    ("hero-01-navy.jpg",       "3.png"),
    ("hero-02-thermal.jpg",    "4.png"),
    ("hero-03-denim.jpg",      "6.png"),
    ("hero-04-crimson.jpg",    "8.png"),
    ("hero-05-lime.jpg",       "10.png"),
    ("hero-06-starfield.jpg",  "7.png"),
    ("hero-07-fabric.jpg",     "5.png"),
    ("hero-08-speckle.jpg",   "15.png"),
]

TARGET = 1400  # long-side pixels for hero quality

for out, src in posters:
    src_path = os.path.join(SRC_DIR, src)
    out_path = os.path.join(OUT_DIR, out)
    img = Image.open(src_path).convert("RGB")
    w, h = img.size
    scale = TARGET / max(w, h)
    new_size = (round(w * scale), round(h * scale))
    img = img.resize(new_size, Image.LANCZOS)
    img.save(out_path, "JPEG", quality=78, optimize=True, progressive=True)
    print(f"{out}: {new_size[0]}x{new_size[1]} -> {os.path.getsize(out_path)/1024:.1f} KB")

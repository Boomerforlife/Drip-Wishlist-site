from PIL import Image
import os, glob

SRC_DIR = r"C:\Users\Vighnesh\dekstop\DR!P\BRAND guidlines\Drip_V1"
OUT_DIR = r"C:\Users\Vighnesh\dekstop\DR!P\Drip launch site\Drip Landing Page Component_v1\assets\trail"
os.makedirs(OUT_DIR, exist_ok=True)

srcs = sorted(glob.glob(os.path.join(SRC_DIR, "*.png")), key=lambda p: int(os.path.splitext(os.path.basename(p))[0]))
TARGET = 420

for src in srcs:
    n = int(os.path.splitext(os.path.basename(src))[0])
    out = os.path.join(OUT_DIR, f"trail-{n:02d}.jpg")
    img = Image.open(src).convert("RGB")
    w, h = img.size
    scale = TARGET / max(w, h)
    ns = (round(w * scale), round(h * scale))
    img = img.resize(ns, Image.LANCZOS)
    img.save(out, "JPEG", quality=74, optimize=True, progressive=True)
    print(f"{os.path.basename(out)}: {ns[0]}x{ns[1]} -> {os.path.getsize(out)/1024:.1f} KB")

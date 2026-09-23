from PIL import Image
import os

SRC_DIR = r"C:\Users\Vighnesh\dekstop\DR!P\BRAND guidlines\Drip_V1"
OUT_DIR = r"C:\Users\Vighnesh\dekstop\DR!P\Drip launch site\Drip Landing Page Component_v1\_design_work"

# Pick 6 posters covering the visual range
posters = {
    "poster-navy.jpg": "3.png",     # clean navy + cream
    "poster-thermal.jpg": "4.png",  # thermal red/blue swirl
    "poster-denim.jpg": "6.png",    # denim texture
    "poster-crimson.jpg": "8.png",  # crimson red + teal drip
    "poster-lime.jpg": "10.png",    # spray-paint lime on violet
    "poster-starfield.jpg": "7.png",# blue/yellow starfield swirl
}

TARGET = 640  # long-side pixels

for out, src in posters.items():
    src_path = os.path.join(SRC_DIR, src)
    out_path = os.path.join(OUT_DIR, out)
    img = Image.open(src_path).convert("RGB")
    w, h = img.size
    scale = TARGET / max(w, h)
    new_size = (round(w * scale), round(h * scale))
    img = img.resize(new_size, Image.LANCZOS)
    img.save(out_path, "JPEG", quality=76, optimize=True, progressive=True)
    print(f"{out}: {new_size[0]}x{new_size[1]} -> {os.path.getsize(out_path)/1024:.1f} KB")

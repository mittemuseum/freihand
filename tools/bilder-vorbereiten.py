#!/usr/bin/env python3
"""
Bereitet Bilder für die Hörstation vor:
  - verkleinert auf höchstens 1600 px an der langen Kante
  - speichert als JPEG (Qualität 82), ohne EXIF-Daten (Kamera, Ort, Zeit)
  - schreibt kleingeschriebene, web-taugliche Dateinamen nach bilder/

Aufruf (im Projektordner):
    pip install pillow
    python3 tools/bilder-vorbereiten.py originale/

Die Dateien aus originale/ werden nicht verändert.
Tipp: Benenne die Originale schon nach dem Muster 001-baracken.jpg,
dann passen die Namen direkt zur kapitel.js.
"""
import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

MAX_KANTE = 1600
QUALITAET = 82
ENDUNGEN = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"}


def sauber(name: str) -> str:
    name = name.lower()
    for alt, neu in (("ä", "ae"), ("ö", "oe"), ("ü", "ue"), ("ß", "ss")):
        name = name.replace(alt, neu)
    return re.sub(r"[^a-z0-9_-]+", "-", name).strip("-")


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    quelle = Path(sys.argv[1])
    ziel = Path(__file__).resolve().parent.parent / "bilder"
    ziel.mkdir(exist_ok=True)

    dateien = sorted(p for p in quelle.iterdir() if p.suffix.lower() in ENDUNGEN)
    if not dateien:
        sys.exit(f"Keine Bilder in {quelle} gefunden.")

    for p in dateien:
        with Image.open(p) as im:
            im = ImageOps.exif_transpose(im)      # Drehung aus EXIF übernehmen
            im = im.convert("RGB")
            im.thumbnail((MAX_KANTE, MAX_KANTE), Image.LANCZOS)
            out = ziel / (sauber(p.stem) + ".jpg")
            im.save(out, "JPEG", quality=QUALITAET, optimize=True, progressive=True)
        print(f"{p.name} -> bilder/{out.name}  ({out.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()

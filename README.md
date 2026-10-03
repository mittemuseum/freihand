# FREIHAND – Hörstation

Klickbare Website für die Hörstation (FH_D2) der Ausstellung
*FREIHAND. Schrift, Schule, Gemeinschaft* im Mitte Museum.

Übersicht mit Kacheln, pro Kapitel eine Seite mit Player, **Bildergalerie**,
Zusammenfassung und aufklappbarem Mitlesetext.
Reines HTML, CSS und JavaScript – kein Build, kein Framework.
Schriften liegen im Projekt, die Station braucht im Betrieb kein Internet.

---

## Aufbau

```
index.html
robots.txt
assets/
  css/style.css      Farben und Gestaltung (Farben nur oben in :root)
  js/kapitel.js      ← HIER stehen alle Inhalte
  js/app.js          Programmlogik, muss nicht angefasst werden
  fonts/             Borel (Titel), Hanken Grotesk (Text)
audio/               001.mp3, 002.mp3 …
bilder/              Bilddateien für die Galerien
tools/bilder-vorbereiten.py
```

## Inhalte pflegen

Alles in `assets/js/kapitel.js`. Pro Kapitel:

| Feld | Bedeutung |
|---|---|
| `nr` | Nummer, zugleich Audio-Dateiname (`001` → `audio/001.mp3`) |
| `titel` | Kachel und Überschrift |
| `bilder` | Liste der Galeriebilder (siehe unten) |
| `text` | Zusammenfassung unter dem Player |
| `transkript` | Sprechtext, Absätze durch Leerzeile; leer = Feld verschwindet |

Ein Galeriebild:

```js
{ datei: "bilder/001-baracken.jpg",
  unterschrift: "Legende und Nachweis, sichtbar unter dem Bild.",
  alt: "Kurze Beschreibung für Screenreader (optional)." }
```

- Die Reihenfolge in `bilder` ist die Reihenfolge in der Galerie, das erste Bild ist auch das Kachelbild.
- Das alte Format (`bild` + `bildunterschrift`) funktioniert weiter.
- Fehlt eine Bilddatei, lässt die Seite sie weg; ohne Bild bleibt die Kachel rein typografisch.
- `alt` beschreibt, was man *sieht*; `unterschrift` sagt, was es *ist*. Ohne `alt` liest ein Screenreader die Unterschrift vor.

## Bilder vorbereiten

```
pip install pillow
python3 tools/bilder-vorbereiten.py originale/
```

Verkleinert auf 1600 px, entfernt EXIF-Daten und legt die Dateien in `bilder/` ab.
Die Originale bleiben unverändert (der Ordner `originale/` wird nicht hochgeladen).

## Farben

| Rolle | Wert |
|---|---|
| Große Schrift, Linien, Rahmen | `#817a4a` |
| Flächen (Kacheln, Bildgrund) | `#ddd9cc` |
| Fließtext und kleine Schrift | `#5f5a33` – dunkler, damit der Kontrast reicht (5:1) |
| Seitenhintergrund | `#fde7e2` (das Rosa der Grafik) |
| Koralle (Ziffern, Randlinie, Feder) | `#fa5f50`, als Schrift `#c23b2b` |

Alle Werte stehen am Anfang von `assets/css/style.css`.

## Veröffentlichen (Account `mittemuseum`)

1. Im Account `mittemuseum` ein Repository `freihand` anlegen.
2. Den Inhalt dieses Ordners hochladen (nicht den Ordner selbst).
3. *Settings → Pages → Deploy from a branch → main / (root)*.
4. Adresse danach: `https://mittemuseum.github.io/freihand/`

**Wichtig:** GitHub Pages ist öffentlich erreichbar. `robots.txt` und `noindex`
halten Suchmaschinen fern, verstecken die Seite aber nicht. Bilder und Audio,
deren Rechte nicht geklärt sind, gehören nicht ins öffentliche Repository
(Einträge dafür in `.gitignore`). Auf dem Stationsrechner im Raum läuft die Seite lokal.

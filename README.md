# FREIHAND – Hörstation

Das hier ist die Hörstation zur Ausstellung *FREIHAND. Schrift, Schule, Gemeinschaft* im Mitte Museum:
eine kleine Website, auf der man elf Kapitel zur Geschichte der 308. Gemeindeschule anhören kann.
Pro Kapitel gibt es einen Player, eine Bildergalerie, eine kurze Zusammenfassung und den Text zum Mitlesen.

Gebaut ist alles aus einfachem HTML, CSS und JavaScript, ohne Baukasten und ohne Internetanbindung im Betrieb
(die Schriften liegen mit im Ordner). Du kannst also alles in einem Texteditor bearbeiten.

## Was liegt wo?

```
index.html            die eine Seite, die alles zeigt
assets/js/kapitel.js  ← hier steht alles Inhaltliche: Titel, Texte, Bilder, Impressum
assets/js/app.js      die Technik, da musst du nicht ran
assets/css/style.css  Farben, Schriften, Abstände (Farben ganz oben)
assets/fonts/         Fraunces (Titel), Hanken Grotesk (Text)
audio/                001.mp3 … 011.mp3 (kommen noch)
bilder/               die Bilder, benannt nach Kapitel und Motiv (001-luftbild.jpg …)
tools/                ein kleines Skript, das Bilder fürs Web verkleinert
```

## Texte ändern

Alles in `assets/js/kapitel.js`. Jedes Kapitel sieht so aus:

| Feld | Was es macht |
|---|---|
| `nr` | Kapitelnummer. Sie bestimmt auch den Namen der Audiodatei (`001` → `audio/001.mp3`) |
| `titel` | Überschrift und Kachel |
| `text` | Die Zusammenfassung unter dem Player |
| `transkript` | Der Sprechtext zum Mitlesen. Absätze trennst du mit einer Leerzeile. Bleibt das Feld leer, verschwindet der Mitlese-Knopf |
| `bild` / `bilder` | Das Bild bzw. die Galerie (siehe unten) |

Die Reihenfolge in der Datei ist die Reihenfolge auf der Seite. Wenn du Kapitel umstellst, achte darauf,
dass `nr` und Audiodatei weiter zusammenpassen.

## Audio

Das ist der einfache Teil: Lege die Datei einfach mit der Kapitelnummer als Namen in den Ordner `audio/`,
also `001.mp3` für Kapitel 1, `011.mp3` für Kapitel 11. Mehr ist nicht nötig, die Seite findet sie selbst
und trägt die Länge in die Kachel ein. Fehlt eine Datei, steht beim Kapitel ein kleiner Hinweis, und der Rest funktioniert trotzdem.
(Wenn du lieber `.m4a` oder `.ogg` nimmst: In `app.js` steht oben `AUDIO_ENDUNG`.)

## Bilder

**Stand jetzt:** Alle elf Kapitel haben ihre Bilder schon, insgesamt 38 von den Ausstellungstafeln. Sie liegen verkleinert im Ordner `bilder/`, die Dateinamen
beginnen mit der Kapitelnummer (`006-gartenarbeit.jpg`), und in `kapitel.js` steht bei jedem Kapitel die Galerie
mit Unterschrift und Bildbeschreibung. Ein Bild tauschst du, indem du die Datei unter demselben Namen ersetzt.
Ein Bild ergänzt du mit einem weiteren Eintrag in `bilder: [ … ]`.

Wenn du ein Kapitel ganz ohne Galerie anlegst, gibt es noch den einfachen Weg: Leg eine Datei mit der Kapitelnummer
als Namen in `bilder/` (`012.jpg`), und sie erscheint von selbst als Kachelbild und im Kapitel. Die Unterschrift steht dann bei `bildunterschrift`.

**Mehrere Bilder pro Kapitel (die Galerie).** So sieht ein Eintrag aus:

```js
bilder: [
  { datei: "bilder/005-streik-der-steine.jpg",
    unterschrift: "Steine auf Demonstration: Auf dem Titel vom 1. März 1927 … Mitte Museum, HMW AB 885.9",
    alt: "Aquarellierte Titelseite: Steinfiguren mit Fahnen ziehen als Demonstrationszug durch die Straße" },
  { datei: "bilder/005-weiteres-bild.jpg",
    unterschrift: "…" }
],
```

- Das erste Bild ist zugleich das Kachelbild.
- In der Großansicht (Bild antippen) vergrößert die Taste „+“ oder zweimal schnelles Tippen das Bild; mit dem Finger verschiebt man den Ausschnitt.
- `unterschrift` ist das, was man liest (Legende und Nachweis). `alt` ist für Screenreader und beschreibt, was man *sieht*. Lässt du `alt` weg, liest ein Screenreader die Unterschrift vor.
- Sobald es `bilder` gibt, wird das einzelne `bild` ignoriert.
- Fehlt eine Datei im Ordner, lässt die Seite sie einfach weg. Gibt es gar kein Bild, bleibt die Kachel rein typografisch.

**Bilder fürs Web vorbereiten.** Scans sind meist riesig. Das Skript in `tools/` verkleinert sie auf 2400 px (damit man in der Großansicht ein Stück hineinzoomen kann; die Zahl steht oben im Skript),
entfernt versteckte Kameradaten und legt sie mit passenden Dateinamen in `bilder/` ab:

```
pip install pillow
python3 tools/bilder-vorbereiten.py originale/
```

Deine Originale bleiben dabei unberührt. Leg sie am besten in einen Ordner `originale/` – der wird nicht hochgeladen.

## Impressum und Datenschutz

Beide Texte stehen oben in der `kapitel.js` (Felder `impressum` und `datenschutz`). In der Fußzeile jeder Seite stehen
„Mitte Museum · Bezirksamt Mitte von Berlin · Text und Umsetzung: Luise Haubenreiser · Sprecherin: Luisa Burmester“ und die beiden Links, die
auf eigene Seiten führen.

So formatierst du die Texte:
- Absätze trennst du mit einer Leerzeile.
- Eine Zeile, die mit `# ` beginnt, wird eine Überschrift, mit `## ` eine kleinere.
- Zeilen mit `• ` am Anfang werden zu einer Liste.
- E-Mail-Adressen und `www.…`-Adressen sind an der Station bewusst kein Link (damit niemand versehentlich die Seite verlässt). Wer die Seite am Handy anbietet, setzt in den Einstellungen `linksInTexten: true`.
- Statt Text kannst du auch einen Link eintragen, zum Beispiel `impressum: "https://…"`.

Die Datenschutzerklärung ist der Text der Museumswebsite. Ein Punkt gehört noch geklärt: Die Seite läuft bei GitHub Pages,
dort werden beim Aufruf IP-Adressen verarbeitet, und die Löschfristen von GitHub sind nicht die auf der Museumswebsite
(„spätestens nach sieben Tage“). Frag dazu kurz die Datenschutzbeauftragte, ob ein Absatz zum Hosting ergänzt werden soll.
Auf dem Rechner an der Station im Raum läuft alles lokal, da fällt nichts an.

## Das Tablet (Samsung Galaxy Tab A, SM-T510)

Die Seite ist für dieses Tablet eingerichtet: im Querformat stehen Bild links und Player samt Text rechts, im Hochformat
untereinander. Alle Tasten sind mindestens 48 Pixel groß, die Schrift ist 18 Pixel, das Tippen reagiert ohne Verzögerung.
Das Tablet sollte so eingestellt werden:

1. **Netzteil anschließen** und den Bildschirm nicht einschlafen lassen. Die Seite hält den Bildschirm selbst wach
   (Chrome ab Version 84). Zur Sicherheit: *Einstellungen › Display › Bildschirm-Timeout* auf den höchsten Wert.
2. **Als App auf den Startbildschirm legen**: in Chrome die Adresse öffnen, Menü (drei Punkte) › *App installieren* bzw.
   *Zum Startbildschirm hinzufügen*. Die Station öffnet dann ohne Adressleiste im Vollbild.
3. **Bildschirm fixieren**, damit niemand die App verlässt: *Einstellungen › Biometrie und Sicherheit › Weitere
   Sicherheitseinstellungen › Fenster fixieren* einschalten, dann in der Übersicht der zuletzt benutzten Apps das App-Symbol
   antippen › *Fixieren*. Aufheben: Zurück- und Übersichtstaste gleichzeitig gedrückt halten.
4. **Lautstärke** vorher einstellen und die Obergrenze festlegen (*Einstellungen › Töne und Vibration › Lautstärke*).
5. **Automatische Updates der Apps und des Systems** für die Ausstellungszeit ausschalten, damit sich nichts mitten im
   Betrieb ändert.

Nach einer Stunde Ruhe lädt sich die Station beim Zurückspringen zur Übersicht neu und holt dabei Änderungen von GitHub.
Fällt das WLAN kurz aus, läuft sie weiter: Texte, Bilder und Audio werden nach dem ersten Aufruf im Tablet gespeichert
(Datei `sw.js`). Hast du eine Audiodatei ausgetauscht, tippst du in Chrome auf das Schloss-Symbol beziehungsweise in den
App-Infos auf *Speicher löschen* oder erhöhst in `sw.js` die Zahl bei `VERSION` – dann wird sie neu geladen.

## Farben und Schrift

Alle Farben stehen ganz oben in `assets/css/style.css`, in einem Block namens `:root`:

| Wofür | Farbe |
|---|---|
| Große Schrift, Linien, Rahmen | `#817a4a` |
| Flächen (Kacheln, Bildgrund) | `#ddd9cc` |
| Fließtext und kleine Schrift | `#5f5a33` – etwas dunkler, damit man es gut lesen kann |
| Seitenhintergrund | `#fde7e2` (das Rosa der Grafik) |
| Koralle (Kapitelziffern) | `#fa5f50`, als Schrift `#c23b2b` |

Wenn du den Fließtext lieber im Originalton `#817a4a` haben willst, änderst du nur den Wert bei `--text`.
Der Kontrast ist dann etwas geringer (3:1 statt 5:1), das reicht für große Schrift, aber für kleine eher nicht.

Die Titelschrift ist Fraunces. Wenn du sie tauschen willst: neue `.woff2`-Datei in `assets/fonts/` legen und oben in
der `style.css` im ersten `@font-face` und bei `--titel-schrift` den Namen ändern.

## Ausprobieren

Am bequemsten startest du einen kleinen lokalen Server und öffnest die Seite im Browser:

```
python3 -m http.server 8000
```

Dann `http://localhost:8000` aufrufen. So habe ich es getestet. Ein Doppelklick auf `index.html` kann auch gehen,
verlassen würde ich mich darauf nicht.

## Veröffentlichen (Account `mittemuseum`)

1. Im Account `mittemuseum` ein Repository `freihand` anlegen.
2. Den *Inhalt* dieses Ordners hochladen (nicht den Ordner selbst).
3. Unter *Settings → Pages → Deploy from a branch* den Zweig `main` mit `/ (root)` auswählen.
4. Nach ein, zwei Minuten läuft die Seite unter `https://mittemuseum.github.io/freihand/`.

**Wichtig:** GitHub Pages ist öffentlich. `robots.txt` und ein `noindex` halten Suchmaschinen fern, verstecken die Seite aber nicht,
wer den Link hat, kann sie öffnen. Bilder und Audio, deren Rechte nicht für eine Veröffentlichung im Netz geklärt sind
(zum Beispiel Zeitungsbilder oder Agenturfotos), gehören deshalb nicht ins öffentliche Repository. Auf dem Rechner an der Station im Raum
läuft die Seite einfach lokal, da ist das kein Thema.

Du kannst in der `.gitignore` Einträge für Ordner oder Dateien ergänzen, die nicht hochgeladen werden sollen.

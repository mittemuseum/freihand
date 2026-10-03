/* ============================================================
   INHALTE DER HÖRSTATION
   Nur diese Datei muss bearbeitet werden.
   Sie enthält alles, was auf der Station zu sehen ist.

   Sprechtext: Feature "Die 308. Gemeindeschule am Leopoldplatz",
   nach Roik-Bogner, Radde 1973/1992 und dem Typoskript
   von Bruno Stephan.
   ============================================================ */


/* ---------- Einstellungen ---------- */

const EINSTELLUNGEN = {
  ausstellung:  "freihand",
  untertitel:   "Schrift, Schule, Gemeinschaft",
  ort:          "Mitte Museum",

  // Überschrift und Anleitung auf der Startseite
  stationstitel: "Zum Hören",
  anleitung:     "Elf Kapitel zur Geschichte der 308. Gemeindeschule am Leopoldplatz. Tippen Sie auf ein Kapitel, um es zu hören.",

  // Springt nach dieser Zeit ohne Berührung zurück zur Übersicht.
  // 0 = ausgeschaltet. Läuft nie, solange Audio abgespielt wird.
  ruhezeitMinuten: 4,

  // Sprungweite der beiden Pfeiltasten
  sprungSekunden: 15,

  // Fußzeile und Impressum. Der Impressumstext steht direkt hier.
  // Absätze durch Leerzeile; eine Zeile mit „# “ am Anfang wird Zwischenüberschrift.
  // (Statt Text geht auch ein Link: impressum: "https://…")
  fusszeile:   "Mitte Museum · Bezirksamt Mitte von Berlin · Text und Umsetzung: Luise Haubenreiser",
  impressum:   `Hörstation zur Ausstellung „FREIHAND. Schrift, Schule, Gemeinschaft“ im Mitte Museum (11. Oktober bis 11. November 2026)

# Herausgeber
Mitte Museum
Bezirksamt Mitte von Berlin
Fachbereich Kunst, Kultur und Geschichte, Amt für Weiterbildung und Kultur
Pankstraße 47, 13357 Berlin
info@mittemuseum.de · www.mittemuseum.de

# Text und Umsetzung
Luise Haubenreiser

# Weitere Pflichtangaben
Vertretungsberechtigung und weitere Angaben: siehe Impressum auf www.mittemuseum.de.

# Bilder und Sammlung
Alle Abbildungen stammen, sofern nicht anders angegeben, aus der Sammlung des Mitte Museums, Bezirksamt Mitte von Berlin. Viele der gezeigten Hefte, Fotografien und Dokumente hat Bruno Stephan, Lehrer an der 308. Gemeindeschule, gesammelt und aufbewahrt. Sein Nachlass befindet sich heute im Mitte Museum. Die Nachweise stehen bei den Bildern.

# Schriften
Fraunces und Hanken Grotesk, beide unter der SIL Open Font License.`,
  datenschutz: `Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.

Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.

Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.

Unsere Datenschutzerklärung ist wie folgt gegliedert:
I. Informationen über uns als Verantwortliche
II. Rechte der Nutzer und Betroffenen
III. Informationen zur Datenverarbeitung

# I. Informationen über uns als Verantwortliche
Verantwortlich im Sinne des § 6 Teledienstegesetzes und des § 10 Mediendienste-Staatsvertrags ist das Mitte Museum. Das Mitte Museum ist eine Einrichtung des Bezirksamts Mitte von Berlin, Amt für Weiterbildung und Kultur, Fachbereich Geschichte.
Inhaltlich verantwortlich: Nathan Friedenberg | Leiter Mitte Museum, Tel. (030) 460 60 19 16, E-Mail: friedenberg@mittemuseum.de
Die Datenschutzbeauftragte: Frau Völz, E-Mail: datenschutz@ba-mitte.berlin.de, Anschrift: Mathilde-Jacob-Platz 1, 10551 Berlin

# II. Rechte der Nutzer und Betroffenen
Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht
• auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);
• auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);
• auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;
• auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
• auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).

Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.

Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.

# III. Informationen zur Datenverarbeitung
Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.

## Serverdaten
Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.

Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.

Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.

Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von der Löschung ausgenommen.

## Kontaktanfragen / Kontaktmöglichkeit
Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.

Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.

Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.

(erstellt auf Grundlage der Muster-Datenschutzerklärung der Anwaltskanzlei Weiß & Partner)`
};


/* ---------- Kapitel ----------

   Felder pro Kapitel:
     nr       Nummer, zugleich Dateiname (001 → audio/001.mp3, bilder/001.jpg)
     titel    erscheint auf der Kachel und über dem Player
     bild     Pfad zum Bild, oder "" wenn (noch) keins da ist
     bildunterschrift  Legende und Nachweis, oder ""
     text     Zusammenfassung unter dem Bild
     transkript  Sprechtext zum Mitlesen. Absätze durch Leerzeile trennen.

   NEU – Bildergalerie statt einzelnem Bild:
     bilder: [
       { datei: "bilder/001-baracken.jpg",
         unterschrift: "Legende und Nachweis, sichtbar unter dem Bild.",
         alt: "Kurze Beschreibung für Screenreader (optional)." },
       { datei: "bilder/001-lageplan.jpg", unterschrift: "…" }
     ],
   Gibt es `bilder`, werden `bild` und `bildunterschrift` ignoriert.
   Die Reihenfolge ist die der Galerie, das erste Bild ist auch das Kachelbild.
   Fehlende Bilddateien lässt die Seite einfach weg.
------------------------------------------------------------ */

const KAPITEL = [

{
  nr: "001",
  titel: "Zehn Baracken aus Holz",
  bilder: [
    { datei: "bilder/001-luftbild.jpg",
      unterschrift: "Hinter dem Bretterzaun liegt die Schule: Blick von oben auf die Baracken der 308. Gemeindeschule am Leopoldplatz.",
      alt: "Altes Schwarzweißfoto von oben: Ein Weg führt zwischen Bäumen hinab, dahinter niedrige Holzbaracken, davor ein Bretterzaun mit Tor, im Hintergrund Mietshäuser." }
  ],
  text: "1904 plant die Stadtbauinspektion zehn transportable Schulpavillons aus Holz, dazu eine Turnhalle, umgeben von einem zweieinhalb Meter hohen Bretterzaun. Im Januar 1905 ziehen die ersten Kinder ein. Die Schule, die später als 308. bekannt wird, kommt erst 1913 dazu: zwölf Mädchen- und zwei Knabenklassen, Arbeiterkinder aus den Hinterhöfen ringsum.",
  transkript: `Es beginnt mit Holz.

Im Herbst 1904 reicht die Stadtbauinspektion Wedding Pläne ein: zehn Schulpavillons aus Holz, die sich versetzen lassen, und eine Turnhalle. Sie sollen mitten im Viertel entstehen, nahe dem Leopoldplatz, zwischen Malplaquetstraße und Schulstraße. Die Baracken stehen hinter einem zweieinhalb Meter hohen Bretterzaun. Zwei Eingangstore zur Nazarethkirchstraße, zwei Fußgängerpforten zur Schulstraße.

Am 16. Januar 1905 werden die Baracken zur Nutzung abgenommen. Sofort ziehen die ersten Kinder ein – Mädchen der 244. Gemeindeschule. Andere Schulen folgen, teilen sich die Baracken. Erst am 1. Oktober 1913 zieht die Schule ein, die als „308.“ in die Geschichte eingehen wird. Mit ihr kommen Rektor Steffen, zwölf Mädchenklassen und zwei Knabenklassen.

Es ist eine Schule für Arbeiterkinder im Wedding. Für Kinder aus engen Wohnungen, aus Hinterhöfen, aus Familien, in denen das Geld selten reicht und die Wände nah sind. Und es ist – noch – eine ganz normale Gemeindeschule.

Aber das wird sich ändern.`
},

{
  nr: "002",
  titel: "Eine Schule als Lebensgemeinschaft",
  bilder: [
    { datei: "bilder/002-sommerfest.jpg",
      unterschrift: "Sommerfest an der 308. Gemeindeschule: Zwischen den Baracken spannt sich ein bemaltes Tuch mit den Worten „Es war einmal“. Darunter drängen sich die Gäste.",
      alt: "Altes Foto: Über einem Weg zwischen Holzbaracken hängt ein großes bemaltes Tuch mit gemalten Figuren und der Aufschrift „Es war einmal“. Darunter steht eine Menschenmenge." }
  ],
  text: "1923 übernimmt Max Kreuziger das Rektorat. Er kennt die Hamburger Reformschulen und den Begriff, den Wilhelm Paulsen für sie geprägt hat: Lebensgemeinschaft. Kinder, Lehrkräfte und Eltern sollen die Schule gemeinsam tragen, und was die Kinder von draußen mitbringen, soll nicht vor der Tür bleiben. Die 308. arbeitet von 1923 an so — offiziell anerkannt wird sie erst sieben Jahre später.",
  transkript: `An der 308. Gemeindeschule, einer Barackenschule am Leopoldplatz, beginnt 1923 etwas Neues. Dort übernimmt ein Mann namens Max Kreuziger das Rektorat. Er ist Sozialdemokrat, überzeugter Reformpädagoge, beeinflusst von der Hamburger Bewegung um Wilhelm Paulsen. Und er trägt eine Frage mit sich, die in dieser Zeit viele Lehrkräfte umtreibt: Was soll Schule eigentlich sein?

Die Antwort, die Kreuziger gibt, klingt einfach. Und ist es nicht.

Er nennt sie – mit dem Begriff, den Paulsen für die ganze Bewegung geprägt hat: Lebensgemeinschaft.

Keine Schule, in der Wissen von oben nach unten gereicht wird. Kein Ort, der das Leben draußen aussperrt. Sondern ein Ort, an dem Kinder, Lehrkräfte und Eltern gemeinsam leben – an dem das, was die Kinder kennen, fühlen, erleben, nicht vor der Tür bleibt, sondern in den Mittelpunkt rückt.

Die 308. lebt das pädagogische Programm von Anfang an – offiziell anerkannt als Lebensgemeinschaftsschule wird sie allerdings erst 1930, als die Zahl solcher Versuchsschulen in Berlin auf elf steigt.

Die 308. ist außerdem eine weltliche Schule – keine konfessionelle, keine evangelische, keine katholische. Weltlich heißt: ohne Religionsunterricht. Das ist eine politische Entscheidung, und die evangelische Kirche kämpft gegen solche Schulen.

Kreuziger hatte die Hamburger Reformschulen studiert, wo Lehrer wie Wilhelm Paulsen darauf bestanden: Kinder sind keine leeren Behälter, sondern bringen Erfahrungen, Bilder, Sprache, Gefühle mit. Und genau das sollte Eingang in die Schule finden.

Paulsen ist dabei mehr als ein Name aus Hamburg. Von 1921 bis 1924 ist er Oberstadtschulrat, in leitender Position der Berliner Schulverwaltung. Er kämpft gegen bürokratische Hürden und öffnet den Weg für die ersten Versuchsschulen.

Im Wedding des Jahres 1923 bedeutet das: Diese Kinder bringen den Leopoldplatz mit. Die Enge der Mietskasernen. Die Gerüche der Hinterhöfe. Die Stimmen der Mütter, die abends rechnen, ob das Geld reicht. Den Lärm der Straße. Die Freiheit der wenigen Freiflächen.

All das soll nicht draußen bleiben. All das soll hinein.`
},

{
  nr: "003",
  titel: "Freier Ausdruck",
  bilder: [
    { datei: "bilder/003-andenken.jpg",
      unterschrift: "„Andenken“ nennt ein Kind diesen Aufsatz: Bei jedem Sommerfest fotografiert Lehrer Bruno Stephan, ein paar Tage später können die Kinder die Bilder bei ihm kaufen.",
      alt: "Linierte Heftseite in Schreibschrift mit der Überschrift „Andenken“. Ein Kind schreibt, dass es beim Sommerfest fotografiert wird und sich Bilder kaufen kann." }
  ],
  text: "Keine Diktate, keine Abschriften: Die Kinder schreiben eigene Beobachtungen und Geschichten auf. In Alfred Zettls Klassenzimmer bemalt ein ehemaliger Schüler die Wände mit historischen Szenen, und die Eltern sparen Stahlrohrstühle an, damit sich im Unterrichtsgespräch alle ansehen können. In jedem Klassenraum steht ein Aquarium. Ein Reporter der BZ am Mittag nennt die Schule im Mai 1931 das Reich der Kinderträume.",
  transkript: `Rektor Max Kreuziger beginnt, die 308. Gemeindeschule zu verwandeln, gemeinsam mit seinem Kollegen Bruno Stephan und dem restlichen Kollegium.

Das Zentrum dieser Verwandlung ist ein Begriff, der in der Reformpädagogik dieser Jahre wie ein Schlüssel kursiert: freier Ausdruck. Die Idee: Kinder sollen nicht nachahmen, nicht wiederholen, nicht auswendig lernen. Sie sollen sich Raum nehmen und ausdrücken, was sie sehen. Was sie denken. Was sie fühlen.

Das klingt heute selbstverständlich. Damals ist es eine kleine Revolution.

An der 308. bedeutet freier Ausdruck: Die Kinder schreiben eigene Texte – keine Diktate, keine Abschriften, sondern eigene Beobachtungen, eigene Geschichten, eigene Gedanken. Sie zeichnen, was sie sehen. Sie gestalten ihren Klassenraum mit. Sie benennen, was sie kennen, und lernen dabei, dass ihre Sprache zählt. Dass ihre Welt zählt.

Ein Mädchen schreibt 1925 einen Schulaufsatz. Mitten im Text unterbricht sie sich: „Ich meine, das gehört doch nicht zum Schulunterricht.“ Dann schreibt sie weiter. Was die Kinder beschäftigt, gehört in diese Schule.

Ein anderes Kind schreibt über das Sommerfest. Sein Aufsatz heißt „Andenken“. Lehrer Bruno Stephan fotografiert dort jedes Mal, und ein paar Tage später können die Kinder die Bilder bei ihm kaufen. „Die hebe ich auf, als Andenken“, schreibt das Kind.

In Lehrer Alfred Zettls Klassenzimmer hat ein ehemaliger Schüler, inzwischen selbst Kunsterzieher, die Wände bemalt – mit Illustrationen historischer Geschehnisse. Nicht als Dekoration. Als Einladung. Die Bilder sollen Gespräche auslösen, Fragen, Assoziationen. Der Raum selbst wird zum pädagogischen Werkzeug.

Auch die alte Ordnung weicht: Weg von der starren Bankreihe, die nur Frontalunterricht zulässt. Neue Stahlrohrstühle stehen jetzt im Klassenzimmer – von den Eltern mühsam angespart, damit die Kinder sich im Unterrichtsgespräch anschauen können.

Und dann sind da die Aquarien.

Goldfische, Schnecken, Krebse, Salamander, Frösche – in jedem Klassenraum. Als Beobachtungsobjekte, als Gesprächsanlässe, als lebendige Welt, die in den Unterricht hineinragt. Die Kinder sollen schauen. Beschreiben. Staunen.

Ein Reporter der BZ am Mittag schreibt im Mai 1931 begeistert: Die 308. sei „das Reich der Kinderträume“. Auf den Tischen Blumentöpfe. An den Wänden Bilder. Die Kinder sollten sich, so Alfred Zettl, im Unterrichtsraum wohl und aufgehoben fühlen – als gehöre dieser Raum ihnen.`
},

{
  nr: "004",
  titel: "Schreiben lernen",
  bilder: [
    { datei: "bilder/004-ringbahn.jpg",
      unterschrift: "Die zweite Schrift, die die Kinder lernen: eine lateinische Schreibschrift, runder und der heutigen Handschrift näher. Zwischen vorgedruckten Hilfslinien erzählt Tankred von einer Fahrt mit der Ringbahn zum Tempelhofer Feld – und wie er Willi erklärt, was „die Dinger“ an der Strecke bedeuten.",
      alt: "Aufgeschlagenes Heft, zwei Seiten in Schreibschrift mit buntem Rand, quer gedreht. Auf der Seite oben steht „Die Ringbahn“, unten eine kleine Zeichnung." }
  ],
  text: "Kinder in preußischen Schulen üben seit 1915 Sütterlin; bewertet wird die Abweichung von der Vorlage. An der 308. wird Schreiben zum Werkzeug: Der Lehrplan ordnet es Themenkreisen zu, vom Körper des Kindes bis zu „Unser Wedding“. Zeugnisse lehnt die Schule im Prinzip ab. Weil Lehrstellen und weiterführende Schulen sie verlangen, gibt es eine Zwischenregelung ohne Noten.",
  transkript: `Schreiben lernen heißt zunächst: die Hand nach einer Vorlage formen.

Kinder in preußischen Schulen üben seit 1915 die Sütterlinschrift, eine Kurrentschrift. Jeder Buchstabe hat seine feste Form. Bewertet wird, wie weit ein Kind von der Vorlage abweicht.

An der 308. Gemeindeschule im Wedding bleibt die Übungsstunde. Aber ihr Ziel dreht sich um. Schreiben soll kein Formenspiel mehr sein, sondern ein Werkzeug für das Kind, für das, was es sagen will.

Auch bei den Zeugnissen geht die Schule eigene Wege. Sie lehnt „im Prinzip die Erteilung von Zeugnissen ab“. Die Begründung: Eltern können sich jederzeit nach ihrem Kind erkundigen, dafür braucht es kein Zeugnis. Weil aber Lehrstellen und weiterführende Schulen darauf bestehen, gibt es eine Zwischenregelung: einmal im Jahr ein mündlicher Bericht und ein kurzer schriftlicher, ohne Noten.

Der Lehrplan ordnet das Schreiben Themenkreisen zu. Das Kind und sein Körper. Das Kind zu Hause. Das Kind auf der Straße. Die Arbeit der Eltern.

Und zuletzt: unser Wedding.`
},

{
  nr: "005",
  titel: "Die Zeitung der Klasse",
  bilder: [
    { datei: "bilder/005-streik-der-steine.jpg",
      unterschrift: "Steine auf Demonstration: Auf dem Titel vom 1. März 1927 ziehen sie mit Fahnen und Schildern durch die Straßen. Die Geschichte dazu erzählt vom Streik der Steine in Berlin-Mitte, angeführt vom Rüdersdorfer Kalkstein. Ihre Forderung: „Wir wollen nicht mehr getreten und so mißhandelt werden.“",
      alt: "Aquarellierte Titelseite der Gemeinschaftszeitung vom 1. März 1927: Steinfiguren mit Fahnen und Schildern ziehen in einem Demonstrationszug. Darunter steht „Der Streik der Steine“." }
  ],
  text: "Am 1. Mai 1926 erscheint die erste Ausgabe der Gemeinschaftszeitung, geschrieben, gezeichnet und aquarelliert von Hand. Die Redaktion wechselt, pünktlich erscheint sie nicht immer, und Horst Fink schreibt, die Hälfte der Klasse habe noch keinen Aufsatz geliefert. Zwanzig Hefte sind erhalten. Korrekturen von Lehrerhand findet man darin nicht.",
  transkript: `„Es war im Frühjahr 1926, als wir die Klassenzeitung gründeten.“ So beginnt Horst Fink die Geschichte der Gemeinschaftszeitung. Am 1. Mai erscheint die erste Ausgabe.

Heft für Heft entsteht sie von Hand: geschrieben, gezeichnet, aquarelliert. Drei Jungen bauen die erste Nummer gemeinsam auf: Horst Fink, Heinz Schunke und Hans Gebhard.

Schon in der ersten Ausgabe steht ein Gedicht von Heinz Schunke: „In der Christlichen Schule“. Es handelt vom Gebet vor der ersten Stunde, vom Nachsitzen, vom Rohrstock. Ob Schunke selbst eine solche Schule besucht hat, wissen wir nicht. Er reimt: „Kannst du nicht das Einmaleins, gibt es mit dem Rohrstock eins.“

Danach schreiben viele mit, jedes Kind anders. H. Gebhard erklärt, wie man Linolschnitte macht, mit genauen Preisen: An der Ecke Reinickendorfer und Schererstraße gebe es „für einen Groschen ein schönes großes Stück Linoleum“. S. Schmoller berichtet vom Schwimmen und von einem Schneemann im Grunewald, mit exakten Maßen. L. Dammasch erzählt von einem Jungen, der heimlich die Wohnung putzt, während die Mutter schläft.

Und manchmal steht eine ganz kleine Geschichte darin. Sie heißt „Unsere Angst“, März 1928: „Als wir gegen Herrn Eckerts Klasse ein Fußballwettspiel machten und ziemlich zu Ende waren, rief auf einmal ein Junge: ‚Der Mann mit dem Hund kommt!‘ Nun rannten wir alle gleich von dem Platz herunter.“ Wer der Mann mit dem Hund ist und warum er Angst macht, steht nicht da.

Die Redaktion wechselt. Erst führt Heinz Schunke das „Zeitungsamt“, dann Hans Gebhard. Pünktlich erscheint die Zeitung nicht immer. Horst Fink schreibt unverblümt: „Ich könnte nämlich beweisen, dass die Hälfte unserer Klasse noch keinen einzigen Aufsatz für die Zeitung geschrieben hat.“

Das ist mehr als Schulalltag. Nach 1918 setzen Bildungsreformer auf Schülerselbstverwaltung: Kinder sollen Demokratie selbst ausüben, mit eigenen Ämtern und eigener Verantwortung. Was wie ein Spiel wirkt, ist zugleich gelebte Selbstverwaltung.

Zwanzig Hefte sind übrig. Dass es sie noch gibt, verdankt sich einem Lehrer, der sie aufhob. Korrekturen von Lehrerhand findet man darin nicht.`
},

{
  nr: "006",
  titel: "Der Garten und die Kakaoküche",
  bilder: [
    { datei: "bilder/006-schulgarten-postkarte.jpg",
      unterschrift: "„308. Volksschule – Schulgarten“ steht über dem Tor. Auf Land der St.-Aloysius-Kirche, heute Teil des Schillerparks, bauen Familien Gemüse an. Die Ernte geht an die Schulküche. Die Postkarte vom August 1930 ist an Bruno Stephan adressiert, mit Dank für seine Hilfe.",
      alt: "Postkarte: Ein weißes Gartentor mit dem Schild „308 Volksschule Schulgarten“, dahinter Beete, Büsche und Bäume." },
    { datei: "bilder/006-gartenarbeit.jpg",
      unterschrift: "Mit Spaten und Schaufel: Kinder und Erwachsene graben gemeinsam den Schulgarten der 308. Gemeindeschule um.",
      alt: "Altes Foto: Kinder und Erwachsene graben mit Spaten und Schaufeln ein Stück Land um, im Hintergrund Bäume." },
    { datei: "bilder/006-aufruf.jpg",
      unterschrift: "„Unser Schulgarten ruft.“ Mit diesem Aufruf suchen Elternausschuss und Lehrer*innen Unterstützung aus allen Familien – wer mitarbeitet, bekommt ein eigenes Stück Land.",
      alt: "Maschinengeschriebener Aufruf mit einer gezeichneten Figur mit weit geöffnetem Mund, darin die Worte „Unser Schulgarten ruft“. Unten ein Abschnitt zum Ausfüllen." }
  ],
  text: "Die Schule hat einen Garten, und der Garten ist Unterricht: Im September 1925 schreiben die Schüler auf, wie sich das Land am besten für die Gemeinschaft nutzen ließe. In der Schulküche kochen Väter und Mütter für die bedürftigsten Kinder — einkaufen, Tisch decken, abwaschen und die Abrechnung führen die Kinder selbst. Jede Klasse hat außerdem ihre eigene Kakaoküche, betrieben von Müttern nach festem Plan.",
  transkript: `An der 308. Gemeindeschule endet Schule nicht an der Klassentür. Das Kollegium denkt größer.

Die Schule hat einen Garten. Und der Garten ist kein Schmuck. Er ist Unterricht. Die Kinder pflanzen, ernten, beobachten das Wachsen. Im September 1925 äußern sich die Schüler schriftlich darüber, wie das Gartenland möglichst einträglich für die Gemeinschaft genutzt werden könnte. Der Garten ist Biologieunterricht, Schreibanlass, Gemeinschaftsprojekt. Und für Kinder, die zuhause keinen Quadratmeter Grün haben, ist er noch etwas anderes: ein Erfahrungsraum, den sie sonst nicht kennen würden.

Eine Postkarte vom August 1930 zeigt ihn: „308. Volksschule – Schulgarten“ steht über dem Tor. Es ist Land der St.-Aloysius-Kirche, dort, wo heute der Schillerpark liegt. Familien bauen Gemüse an, die Ernte geht an die Schulküche.

Es gibt eine Schulküche. Väter und Mütter bereiten dort das Mittagessen für die bedürftigsten Kinder der Schule zu. Die Kinder selbst sind dabei keine Zuschauer: Sie kaufen ein, decken den Tisch, waschen ab und führen die Abrechnung der Küche. Für eine gewisse Zeit ist die Schulküche ganz offiziell Aufgabe einer der oberen Klassen.

Und es gibt Kakao. Jede Klasse hat ihre eigene Kakaoküche, in einem Vorraum zum Klassenzimmer.

Lehrer Bruno Stephan erinnert sich noch Jahrzehnte später daran. Er schreibt: „Die Kakaoküche lag in den Händen der Mütter, die sich drei um drei Tage nach festem Plan dafür zur Verfügung stellten.“

Auch Clara Grunwald, die Hygienebeauftragte der Schule und überzeugte Montessori-Pädagogin, lädt zum Kakao ein. Nach den bezahlten Stunden bittet sie ihre Schülerinnen und Schüler in ihre Wohnung, die Eltern zur Beratung.

Schule ist kein Gegenraum zum Leben, sondern seine Fortsetzung. Ein Ort, den Eltern, Kinder und Lehrkräfte gemeinsam tragen.`
},

{
  nr: "007",
  titel: "Montagabend, achtzehn Uhr",
  bilder: [
    { datei: "bilder/007-einladung.jpg",
      unterschrift: "„Niemand darf fehlen!“ Im November 1930 lädt die 308. zur großen Elternversammlung in die Turnhalle. Bruno Stephan spricht über den Wert der Mitarbeit der Eltern – eine Reformschule wie die 308. Gemeindeschule lebt davon, dass Eltern sie mittragen.",
      alt: "Maschinengeschriebene Einladung: Achtung! Montag, 10. November 1930, abends 8 Uhr, Große Elternversammlung in der Turnhalle. Thema: Vom Wert der Mitarbeit der Eltern an der Schule. Niemand darf fehlen!" },
    { datei: "bilder/007-chor.jpg",
      unterschrift: "Der gemischte Chor der 308. Gemeindeschule, 1927. Mit einem Kreuz markiert sind zwei Lehrer der Schule: Oskar Eckert (mittlere Reihe, mit Brille) und Hans Schneider (vorn).",
      alt: "Gruppenfoto des Chors in mehreren Reihen vor einer Holzbaracke. Zwei Personen sind mit einem Kreuz markiert." }
  ],
  text: "Jeden Montag von achtzehn bis zwanzig Uhr tagt der Elternausschuss: drei gewählte Vertreter aus jeder der fünfzehn Klassen, mit dem Kollegium zusammen rund sechzig Personen. Oskar Eckert baut neben dem Schülerchor auch einen Elternchor auf. Zum Sommerfest 1931 kommen einige tausend Menschen auf den Leopoldplatz, mit Fackelzug und Aufführungen der Kinder. Das Jahresmotto lautet: Es war einmal.",
  transkript: `An der 308. Gemeindeschule gehört der Montagabend den Eltern.

Jeden Montag, von achtzehn bis zwanzig Uhr, tagt der Elternausschuss. Aus jeder der fünfzehn Klassen kommen drei gewählte Vertreter. Mit dem Kollegium zusammen sind es rund sechzig Menschen. Es gilt Teilnahmepflicht. Einmal im Monat kommen dann, in jeder Klasse einzeln, alle Eltern zusammen. Hier, sagt Kreuziger selbst, sei die Aussprache „naturgemäß lebhafter“.

Die Eltern sind keine Adressaten, die über das Tun der Schule informiert werden. Sie sind Teil des Ganzen. Sie bringen Kuchen. Sie organisieren das Sommerfest. Sie singen im Elternchor. Lehrer Oskar Eckert hat nicht nur einen Schülerchor und einen gemischten Chor aufgebaut, sondern auch einen Elternchor und einen Männerchor.

Das Sommerfest 1931 ist – wie alle anderen Feste – ein Großereignis. Laut der Vossischen Zeitung vom 23. August 1931 strömen einige tausend Menschen auf den Leopoldplatz. Es gibt einen Fackelzug, Kaffeeküchen, Aufführungen der Kinder. Das Jahresmotto: „Es war einmal…“ Eine Schule, die sich selbst als Lebensgemeinschaft versteht, feiert auch gemeinsam.

Die Schule führt Theaterstücke auf. 1928 „Das Glückskind, oder der Teufel mit den drei goldenen Haaren“. 1930 wagt sich die Abschlussklasse an Gerhart Hauptmanns „Biberpelz“. Die Kinder stehen auf der Bühne.`
},

{
  nr: "008",
  titel: "Der Wedding ringsum",
  bilder: [
    { datei: "bilder/008-reinickendorfer-strasse.jpg",
      unterschrift: "Postkarte „Berlin N., Wedding – Ecke Reinickendorfer Str.“. Mit Tinte hat jemand ein Fenster am rechten Haus markiert und eine Nachricht dazugeschrieben.",
      alt: "Alte Postkarte: Blick in eine Straße mit hohen Mietshäusern, Gaslaternen und Zigarrengeschäften an den Ecken. Handschrift in brauner Tinte steht im Himmel über der Straße." },
    { datei: "bilder/008-meine-strasse.jpg",
      unterschrift: "„Es ist beinahe so, als wenn man lauter Gefängnisgebäude sieht.“ So beschreibt Herbert Seidel, Schüler der 308. Gemeindeschule, seine Bornemannstraße: eine kleine Querstraße, kahle Häuser, fast keine Balkone.",
      alt: "Maschinengeschriebener Aufsatz von Herbert Seidel mit dem Titel „Das Gesicht meiner Straße“." }
  ],
  text: "Über 350.000 Menschen leben 1920 im Wedding, ringsum Mietskasernen und Fabriken; im Sommer 1926 sind rund 30.000 auf Unterstützung angewiesen. Das Viertel organisiert sich: Arbeiterwohlfahrt, Gewerkschaften, Sportvereine, der Rote Wedding. Auf dem Sportplatz an der Behmstraße schlägt der BFC Nordiska im Mai 1921 den BC Saxonia Erfurt mit 5:2. Am 1. Mai 1929 sterben beim „Blutmai“ mehr als dreißig Menschen.",
  transkript: `Die 308. Gemeindeschule liegt im Wedding. Im Wedding der Weimarer Republik. Einem Viertel, das zu den ärmsten Berlins gehört, einem Viertel voller Arbeiterfamilien, politischer Auseinandersetzungen, sozialer Not.

Über 350.000 Menschen leben 1920 im Wedding, fast jeder zehnte Berliner. Ringsum stehen Mietskasernen und Fabriken: Borsig, AEG, Schering, Osram. Wer hier wohnt, arbeitet oft in einer von ihnen, wenn überhaupt. Im Sommer 1926 sind rund 30.000 Menschen im Wedding auf Erwerbslosenunterstützung oder Wohlfahrt angewiesen.

Die Kinder wohnen eng. „Nur wenige Eltern verfügen über zwei Zimmer. Die Regel ist die Einzimmerwohnung“, hält die Schule fest. Eltern, Kinder und Geschwister teilen sich oft ein einziges Bett.

Wer hier lebt, organisiert sich. Die Arbeiterwohlfahrt entsteht Ende 1919 als Antwort auf Hunger und Massenelend, mit Volksküchen und Nähstuben. Dazu kommen Gewerkschaften, Sportvereine und Bildungszirkel, zu großen Teilen getragen von SPD und KPD. So bekommt der Bezirk seinen Namen: der Rote Wedding.

Und es wird Fußball gespielt. An der Behmstraße schlägt im Mai 1921 der BFC Nordiska den BC Saxonia Erfurt mit fünf zu zwei. Der Platz heißt damals noch nach seinem Besitzer Schebera-Platz. Dicht gedrängt stehen die Zuschauer am Spielfeldrand, dahinter die Mietshäuser. Im Winter wird der Platz zur Eisbahn.

Am 1. Mai 1929 verhängt Polizeipräsident Zörgiebel ein Demonstrationsverbot. Die KPD ruft trotzdem auf. Tausende ziehen los, 13.000 Polizisten gehen gegen sie vor. Drei Tage dauern die Unruhen. Mehr als dreißig Menschen sterben durch Polizeischüsse, auch Unbeteiligte. Als „Blutmai“ geht das in die Geschichte ein.

Das Viertel formt die Schule. Die Kinder, die an der 308. lernen, wachsen in einer Welt auf, in der politische Überzeugungen Familien spalten, in der Armut ein täglicher Begleiter ist, in der die Straße laut und das Zuhause eng ist. Der freie Ausdruck, den Kreuziger und seine Kollegen fordern, ist auch deshalb so bedeutsam: Er gibt diesen Kindern die Sprache für das, was sie kennen. Er sagt ihnen: Was ihr erlebt, ist es wert, aufgeschrieben zu werden.`
},

{
  nr: "009",
  titel: "Nach Paragraph 4",
  bilder: [
    { datei: "bilder/009-kollegium.jpg",
      unterschrift: "Das Kollegium der 308. bei einer Sitzung. Zweiter von links: Max Kreuziger, daneben Heinrich Mäcke. In der Mitte schreibt Bruno Stephan, neben ihm Alfred Zettl. Rechts, lachend: Else Hiebsch.",
      alt: "Sepiafarbenes Foto: Frauen und Männer sitzen um einen Sitzungstisch unter einer hellen Lampe, einige schreiben." }
  ],
  text: "1933 leiten Heinrich Mäcke und Else Hiebsch die Schule. Beide werden noch im selben Jahr nach Paragraph 4 aus dem Dienst entfernt — jenem Gesetz, mit dem der nationalsozialistische Staat Beamte als politisch unzuverlässig entlassen kann. Max Kreuziger, inzwischen Schulrat, kommt in ein Konzentrationslager und schließt sich später der Widerstandsgruppe um Ernst von Harnack an. Bertha Schübel, Bruno Stephan und Alfred Zettl werden versetzt, Bücher aus der Schüler- und der Elternbücherei werden verbrannt. Im Schuljahr 1933/34 werden alle Berliner Lebensgemeinschaftsschulen aufgelöst.",
  transkript: `Am 29. Januar 1933 spielt an der Behmstraße im Wedding zum letzten Mal eine Berliner Arbeiterauswahl, gegen Dresden. Zwölftausend Zuschauer sind gekommen. Mit der Schule hat dieses Spiel nichts zu tun, mit dem Viertel, in dem sie steht, sehr viel.

Am nächsten Tag, am 30. Januar 1933, wird Adolf Hitler Reichskanzler.

An der 308. Gemeindeschule ändert sich zunächst nichts, was man von außen sehen kann.

Am 13. März versammeln sich noch einmal Eltern der Schulanfänger in der Turnhalle. Der Vortrag trägt den Titel: „Was muß jeder Vater u. jede Mutter von dem Wesen u. von der Arbeit in unserer Schule wissen?“ Es ist einer der letzten Abende, an denen diese Schule so zusammenkommt.

Kreuziger selbst ist zu diesem Zeitpunkt längst nicht mehr Rektor der 308. – schon Ende der zwanziger Jahre war er zum Schulrat für den Bezirk Wedding aufgestiegen. Die Schule leiten inzwischen zwei andere: Rektor Heinrich Mäcke und Konrektorin Else Hiebsch. Beide werden im April 1933 „nach Paragraph 4“ aus dem Dienst entfernt – jenem Gesetz, das es dem nationalsozialistischen Staat erlaubt, Beamte zu entlassen, die als politisch unzuverlässig gelten.

Auch Kreuziger selbst, inzwischen Schulrat, wird Opfer dieses Gesetzes. Nach seiner Entlassung wird er in einem Konzentrationslager interniert. Nach seiner Freilassung taucht er – nach Auskunft seines früheren Kollegen Alfred Zettl – vorübergehend bei diesem unter. Er schließt sich der Widerstandsgruppe um Ernst von Harnack an. Er überlebt die Zeit bis 1945 und arbeitet danach im Schulwesen der DDR.

Auch die anderen werden versetzt, degradiert, zum Schweigen gebracht. Bertha Schübel, die Hauswirtschaftslehrerin, wird im April 1934 „zur Bewährung“ nach Neukölln versetzt – ein bürokratischer Ausdruck für das Verstummen einer Stimme. Bruno Stephan geht im Herbst 1934 nach Reinickendorf. Alfred Zettl wird im April 1935 nach Charlottenburg versetzt.

Nicht alle kommen davon. Clara Grunwald, die Hygienebeauftragte der Schule, wird 1943 nach Auschwitz deportiert und ermordet.

Alfred Zettl erinnert sich auch an das, was in der Schule verbrannt wurde: Bücher aus der umfangreichen Schülerbücherei, aus der von ihm eingerichteten Elternbücherei. Und die schwarz-rot-goldene Fahne wird in die Flammen geworfen.

Im Laufe des Schuljahres 1933/34 lösen die Behörden alle Berliner Lebensgemeinschaftsschulen auf. Ihr demokratischer, kritischer Geist gilt als Fremdkörper. An der 308. werden Mädchen und Jungen wieder getrennt unterrichtet.

Was zehn Jahre lang aufgebaut wurde: die Aquarien, die Chöre, die Gärten, die Montagabende, die Kakaoküchen, der freie Ausdruck, die Überzeugung, dass diese Kinder und ihre Welt zählen. Es wird ausgetrieben. Planmäßig, gründlich, schnell.

Am 26. Januar 1937 brennt die Turnhalle fast vollständig ab. Die verkohlten Überreste stehen zwei Jahre lang.

1943 stehen in den Baracken, in denen der Chor probte und die Kakaoküchen standen, Schreibtische des Ernährungsamts, des Wirtschaftsamts und einer Lebensmittelkartenstelle. Nach 1943 werden fast alle Baracken im Krieg zerstört.`
},

{
  nr: "010",
  titel: "Vierzig Jahre später",
  bilder: [
    { datei: "bilder/010-sommerfest-tanz.jpg",
      unterschrift: "„Volkstänze und Wandertrachten“ lautet 1929 das Motto des Sommerfests. In bestickten Kleidern, mit Blumenkränzen und einem Zylinder tanzen Mädchen auf dem Rasen vor den Schulbaracken.",
      alt: "Altes Foto: Mädchen in Festkleidern und mit Blumenkränzen tanzen auf einer Wiese, im Hintergrund stehen Holzbaracken." }
  ],
  text: "Von der Schule geblieben sind Erinnerungen — an die Aquarien, an den Kakao, an Kreuziger, Zettl und Eckert. Bruno Stephan blickt vierzig Jahre später zurück und findet eine Sache besonders erstaunlich: dass sich Montag für Montag, über all die Jahre, immer wieder genug Eltern für die Ausschusssitzungen fanden.",
  transkript: `Von der 308. Gemeindeschule bleiben Erinnerungen.

Von Lehrkräften, Eltern, ehemaligen Schülerinnen und Schülern, die Jahrzehnte später noch von dieser Schule erzählen. Von den Aquarien. Vom Kakao. Von Max Kreuziger, der die Schule zu dem gemacht hat, was sie war. Von Alfred Zettl, in dessen Klassenzimmer die Wände erzählten. Von Oskar Eckert, der einen Chor mit allen gründete, die er gewinnen konnte – Kinder als auch Eltern.

Bruno Stephan blickt vierzig Jahre später zurück. Er nennt es „eine auch im Rückblick noch fast unglaubliche Leistung“ – dass sich für die zeitraubenden Elternausschusssitzungen, Montag für Montag, all die Jahre über, immer wieder Menschen fanden, die mitmachten.

Vielleicht liegt das Unglaubliche in etwas anderem. Kreuziger und seine Kolleginnen und Kollegen haben etwas geglaubt. Es klingt so einfach und wird so selten wirklich ernst genommen:

Dass Kinder nicht erst dann etwas zu sagen haben, wenn sie erwachsen sind. Dass ihre Sprache, ihre Erfahrungen, ihre Welt – die Enge der Wohnung, der Lärm des Leopoldplatzes, der Geschmack des Kakaos – der Stoff ist, aus dem Bildung werden muss.`
},

{
  nr: "011",
  titel: "Hundert Jahre später",
  bilder: [
    { datei: "bilder/011-workshop-originale.jpg",
      unterschrift: "Mit Handschuhen und Handykamera: Schüler*innen der Herbert-Hoover-Schule halten Seiten aus der Gemeinschaftszeitung für ihre eigene Arbeit fest. Fotografie: Hella Mittrücker, 2026.",
      alt: "Hände in weißen Baumwollhandschuhen und ein Handy über alten Heftseiten auf einem Holztisch." },
    { datei: "bilder/011-workshop-erste-nummer.jpg",
      unterschrift: "Die allererste Nummer der Gemeinschaftszeitung – knapp hundert Jahre nach ihrem Erscheinen wieder in Schüler*innenhänden. Fotografie: Hella Mittrücker, 2026.",
      alt: "Eine behandschuhte Hand hält das Titelblatt der ersten Nummer „Zum 1. Mai“ mit einer gezeichneten Demonstration." },
    { datei: "bilder/011-workshop-titelblatt-august.jpg",
      unterschrift: "Feder und Wasserfarbe: So sehen die Titelblätter des zweiten Jahrgangs aus. Genauso gestalten die Schüler*innen später ihre neue Zeitung. Fotografie: Hella Mittrücker, 2026.",
      alt: "Das Titelblatt Jahrgang 2, Nr. 8 in Folie auf einem Holztisch, daneben weitere Hefte und eine Hand mit Handschuh." },
    { datei: "bilder/011-kalligrafie-kreis.jpg",
      unterschrift: "Erst ein Kreis mit Bleistift, dann die Buchstaben mit Tinte: Mit einer breit geschnittenen Feder füllt sich die Form Strich für Strich. Fotografie: Hella Mittrücker, 2025.",
      alt: "Eine Hand führt eine Feder und schreibt schwarze Schriftzeichen auf weißes Papier, daneben Tintenfass und Tuschespuren." },
    { datei: "bilder/011-kalligrafie-blatt.jpg",
      unterschrift: "Ein fertiges Blatt: Die Buchstaben füllen den Kreis, ein geflochtenes Band hält sie zusammen. Daneben liegen Federhalter und Tinte. Fotografie: Hella Mittrücker, 2025.",
      alt: "Ein weißes Blatt mit einem Kreis aus schwarzen Schriftzeichen, umgeben von einem geflochtenen Band; oben ein Tintenfass und ein Federhalter." },
    { datei: "bilder/011-fenster-aussen.jpg",
      unterschrift: "Gemeinsam mit Daniel Arab hat der Kurs zwei Fenster mit Schrift gestaltet. Von außen wird sie zum Muster. Kalligrafie auf Fensterglas. WPK 7 der Herbert-Hoover-Schule mit Daniel Arab, 2025. Fotografie: Hella Mittrücker, 2025.",
      alt: "Fassade aus gelbem Backstein mit hohen Bogenfenstern; im rechten Fenster ein feines Schriftmuster auf dem Glas." },
    { datei: "bilder/011-fenster-innen.jpg",
      unterschrift: "Von innen wandert die Schrift bei Sonne als Schatten durch den Raum. Kalligrafie auf Fensterglas. WPK 7 der Herbert-Hoover-Schule mit Daniel Arab, 2025. Fotografie: Hella Mittrücker, 2025.",
      alt: "Blick auf ein Fenster von innen: Schatten von Schriftzeichen fallen auf Fensterrahmen und Laibung." }
  ],
  text: "Im Frühjahr 2026 lesen Schülerinnen und Schüler der Herbert-Hoover-Schule die Originale mit Baumwollhandschuhen und schreiben weiter: Aus Fragen der alten Artikel werden eigene Texte. Ihre Zeitung liegt in der Ausstellung neben den Originalen. Zuvor haben sie mit dem Kalligrafen Daniel Arab geübt.",
  transkript: `Im Frühjahr 2026 nehmen Schülerinnen und Schüler der Herbert-Hoover-Schule im Mitte Museum die Hefte der 308. Gemeindeschule in die Hand. Sie tragen Baumwollhandschuhe. Es wird still im Raum. Die Handschriften sind hundert Jahre alt und fremd, sie wollen entziffert werden. Manche Straßen und Orte, von denen die Kinder damals schrieben, gibt es im Bezirk noch heute.

Fragen aus den alten Artikeln werden zu Anlässen für eigene Texte: über Zuhause, über Mut, über den Kiez, über die Zukunft. Viele gehen weit über die Ausgangsfrage hinaus. Wer will, zeichnet. Wer will, erzählt, während jemand mitschreibt.

Davor haben sie geübt, mit dem Kalligrafen Daniel Arab, mit Feder und Tusche. Es entstehen Kalligrafien, in denen die Sprachen der Klasse zu sehen sind. Schrift, die sich von der Bedeutung einzelner Wörter löst und von der Vielfalt der Sprachen erzählt, die diese Klasse spricht.

Im Kunstunterricht zeichnen sie ihre Entwürfe mit Tusche nach und kolorieren sie so, wie der zweite Jahrgang der historischen Zeitung koloriert war. Gebunden zu einem Heft liegt die neue Gemeinschaftszeitung nun in dieser Ausstellung, neben den alten Ausgaben.`
}

];

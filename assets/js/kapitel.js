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
  ausstellung:  "FREIHAND",
  untertitel:   "Schrift, Schule, Gemeinschaft",
  ort:          "Mitte Museum",

  // Überschrift und Anleitung auf der Startseite
  stationstitel: "Zum Hören",
  anleitung:     "Elf Kapitel zur Geschichte der 308. Gemeindeschule am Leopoldplatz. Tippen Sie auf ein Kapitel, um es zu hören.",
  quellen:       "Nach Roik-Bogner, Radde 1973/1992, dem Typoskript von Bruno Stephan und der Gemeinschaftszeitung der Klasse (HMW AB 885).",

  // Springt nach dieser Zeit ohne Berührung zurück zur Übersicht.
  // 0 = ausgeschaltet. Läuft nie, solange Audio abgespielt wird.
  ruhezeitMinuten: 4,

  // Sprungweite der beiden Pfeiltasten
  sprungSekunden: 15,

  // Station auf dem Tablet:
  // Bildschirm nicht einschlafen lassen (Chrome ab Version 84). false = Tablet-Einstellung gilt.
  bildschirmAnlassen: true,
  // E-Mail- und www-Adressen in Impressum/Datenschutz als Link? An der Station besser nicht
  // (sonst verlässt jemand versehentlich die Seite). Für die Ansicht am Handy: true.
  linksInTexten: false,

  // Fußzeile und Impressum. Der Impressumstext steht direkt hier.
  // Absätze durch Leerzeile; eine Zeile mit „# “ am Anfang wird Zwischenüberschrift.
  // (Statt Text geht auch ein Link: impressum: "https://…")
  fusszeile:   "Mitte Museum · Bezirksamt Mitte von Berlin · Text und Umsetzung: Luise Haubenreiser · Sprecherin: Luisa Burmester",
  impressum:   `Hörstation zur Ausstellung „FREIHAND. Schrift, Schule, Gemeinschaft“ im Mitte Museum (11. Oktober bis 11. November 2026)

# Herausgeber
Mitte Museum
Bezirksamt Mitte von Berlin
Fachbereich Kunst, Kultur und Geschichte, Amt für Weiterbildung und Kultur
Pankstraße 47, 13357 Berlin
info@mittemuseum.de · www.mittemuseum.de

# Text und Umsetzung
Luise Haubenreiser
Sprecherin: Luisa Burmester

# Inhaltlich verantwortlich
Nathan Friedenberg, Leiter Mitte Museum
Tel. (030) 460 60 19 16
E-Mail: friedenberg@mittemuseum.de

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
      unterschrift: "Hinter dem Bretterzaun liegt die Schule: Blick von oben auf die Baracken der 308. Gemeindeschule am Leopoldplatz. Mitte Museum, HMW BS 00001",
      alt: "Altes Schwarzweißfoto von oben: Ein Weg führt zwischen Bäumen hinab, dahinter niedrige Holzbaracken, davor ein Bretterzaun mit Tor, im Hintergrund Mietshäuser." },
    { datei: "bilder/001-schuelerzeichnung.jpg",
      unterschrift: "Die Schule aus Kindersicht: 1925 malt ein Kind mit den Initialen KM die 308. Gemeindeschule am Leopoldplatz – flache Baracken hinter einem Bretterzaun, dahinter die hohen Mietshäuser. Mitte Museum, HMW AB 878/1700015",
      alt: "Aquarellierte Kinderzeichnung: Eine Reihe flacher Baracken mit orangefarbenen Dächern hinter einem gelben Bretterzaun, dahinter hohe Häuser und grüne Bäume. Unten rechts die Initialen KM." },
    { datei: "bilder/001-klassenzimmer-32.jpg",
      unterschrift: "Für das Foto falten alle die Hände. Rund fünfzig Mädchen sitzen um 1920 Bank an Bank – die Jungen lernen im selben Haus, aber in eigenen Klassen. Ihr Klassenzimmer in der damaligen 32. Gemeindeschule liegt im ersten Stock des heutigen Mitte Museums. Mitte Museum, HMW-FS AB 349",
      alt: "Schwarzweißfoto: Rund fünfzig Mädchen sitzen in mehreren Bankreihen eines Klassenzimmers, die Hände gefaltet. Von der Decke hängen Lampen, hinten steht eine Lehrerin." }
  ],
  text: "1904 plant die Stadtbauinspektion zehn transportable Schulpavillons aus Holz, dazu eine Turnhalle, umgeben von einem zweieinhalb Meter hohen Bretterzaun. Im Januar 1905 ziehen die ersten Kinder ein. Die Schule, die später als 308. Gemeindeschule bekannt wird, zieht erst 1913 ein: zwölf Mädchen- und zwei Knabenklassen, Arbeiterkinder aus den Hinterhöfen ringsum.",
  transkript: `Es beginnt mit Holz.

Im Herbst 1904 reicht die Stadtbauinspektion Wedding Pläne ein – für zehn transportable Schulpavillons und eine Turnhalle, errichtet im Holzfachwerkbau. Sie sollen mitten im Viertel entstehen, nahe dem Leopoldplatz, zwischen Malplaquetstraße und Schulstraße. Die Baracken stehen hinter einem zweieinhalb Meter hohen Bretterzaun. Zwei Eingangstore zur Nazarethkirchstraße, zwei Fußgängerpforten zur Schulstraße.

Am 16. Januar 1905 werden die Baracken zur Nutzung abgenommen. Sofort ziehen die ersten Kinder ein – Mädchen der 244. Gemeindeschule. Andere Schulen folgen, teilen sich die Baracken. Erst am 1. Oktober 1913 zieht die Schule ein, die als „308. Gemeindeschule“ in die Geschichte eingehen wird. Mit ihr kommen Rektor Steffen, zwölf Mädchenklassen und zwei Knabenklassen.

Es ist eine Schule für Arbeiterkinder im Wedding. Für Kinder aus engen Wohnungen, aus Hinterhöfen, aus Familien, in denen das Geld selten reicht und die Wände nah sind. Und es ist – noch – eine ganz normale Gemeindeschule.

Aber das wird sich ändern.`
},

{
  nr: "002",
  titel: "Eine Schule als Lebensgemeinschaft",
  bilder: [
    { datei: "bilder/002-sommerfest.jpg",
      unterschrift: "Sommerfest an der 308. Gemeindeschule: Zwischen den Baracken spannt sich ein bemaltes Tuch mit den Worten „Es war einmal“. Darunter drängen sich die Gäste. Mitte Museum, HMW BS 00005",
      alt: "Altes Foto: Über einem Weg zwischen Holzbaracken hängt ein großes bemaltes Tuch mit gemalten Figuren und der Aufschrift „Es war einmal“. Darunter steht eine Menschenmenge." }
  ],
  text: "1923 wird die Barackenschule am Leopoldplatz zur weltlichen Schule, ohne Religionsunterricht, und das gegen den Widerstand der evangelischen Kirche. Ihr Rektor wird Max Kreuziger. Er kennt die Hamburger Reformschulen und den Begriff, den Wilhelm Paulsen für sie geprägt hat: Lebensgemeinschaft. Kinder, Lehrkräfte und Eltern tragen die Schule gemeinsam, und was die Kinder von draußen mitbringen, bleibt nicht vor der Tür. Die 308. Gemeindeschule arbeitet von 1923 an so; offiziell anerkannt wird sie erst sieben Jahre später.",
  transkript: `Im Jahr 1923 wird aus der Barackenschule am Leopoldplatz eine weltliche Schule, und Max Kreuziger wird ihr Rektor.

Weltlich heißt: ohne Religionsunterricht. Zum 1. April 1923 werden acht Weddinger Gemeindeschulen, darunter die Barackenschule am Leopoldplatz, in weltliche Schulen umgewandelt. Das ist eine politische Entscheidung, und die evangelische Kirche kämpft gegen solche Schulen. Die Bezirksverordnetenversammlung Wedding hatte schon am 4. Januar 1922 beschlossen, die Einrichtung weltlicher Schulen zu beantragen. Pfarrer Struckmeier, Vorsitzender der evangelischen Eltern im Wedding, schickt eine Warnkarte, „Achtung! Evangelische Eltern!“, an sämtliche Väter der betroffenen Schulen. Flugblätter werden verteilt. Der Vorwurf lautet: Diese Schule ist gottlos, die Kinder wachsen ohne Werte auf.

Ihr Rektor Max Kreuziger ist Sozialdemokrat und überzeugter Reformpädagoge, beeinflusst von der Hamburger Bewegung um Wilhelm Paulsen. Er hatte die Hamburger Reformschulen studiert, wo Lehrer wie Paulsen darauf bestanden: Kinder sind keine leeren Behälter, sondern bringen Erfahrungen, Bilder, Sprache und Gefühle mit. Und genau das sollte Eingang in die Schule finden. Kreuziger trägt eine Frage mit sich, die in dieser Zeit viele Lehrkräfte umtreibt: Was soll Schule eigentlich sein?

Seine Antwort trägt den Namen, den Paulsen für die ganze Bewegung geprägt hat: Lebensgemeinschaft. Keine Schule, in der Wissen von oben nach unten gereicht wird. Kein Ort, der das Leben draußen aussperrt. Sondern ein Ort, an dem Kinder, Lehrkräfte und Eltern gemeinsam leben – an dem das, was die Kinder kennen, fühlen, erleben, nicht vor der Tür bleibt, sondern in den Mittelpunkt rückt.

Paulsen ist dabei mehr als ein Name aus Hamburg. Von 1921 bis 1924 ist er Oberstadtschulrat, in leitender Position der Berliner Schulverwaltung. Er kämpft gegen bürokratische Hürden und öffnet den Weg für die ersten Versuchsschulen. Die 308. Gemeindeschule lebt das pädagogische Programm von Anfang an – offiziell anerkannt als Lebensgemeinschaftsschule wird sie allerdings erst 1930, als die Zahl solcher Versuchsschulen in Berlin auf elf steigt.`
},

{
  nr: "003",
  titel: "Freier Ausdruck",
  bilder: [
    { datei: "bilder/003-andenken.jpg",
      unterschrift: "„Andenken“ nennt ein Kind diesen Aufsatz: Bei jedem Sommerfest fotografiert Lehrer Bruno Stephan, ein paar Tage später können die Kinder die Bilder bei ihm kaufen. Mitte Museum, HMW AB Aufsätze 308 00024",
      alt: "Linierte Heftseite in Schreibschrift mit der Überschrift „Andenken“. Ein Kind schreibt, dass es beim Sommerfest fotografiert wird und sich Bilder kaufen kann." },
    { datei: "bilder/003-fahrten-titelblatt.jpg",
      unterschrift: "Was die Lehrer*innen aus der Jugendbewegung mitbringen, findet sich an der 308. Gemeindeschule immer wieder auf Papier: eine Tuschzeichnung zur „Sommerfahrt 1927“, Erich Fratzkes Zeichnungen der Hermsdorfer Schleuse und der Jugendherberge in Neu-Vehlefanz. Wanderungen und Ausflüge an den Stadtrand und ins Berliner Umland gehören fest zum Schulprogramm. Mitte Museum, HMW AB 888/00009",
      alt: "Schwarzweißes Titelblatt „Sommerfahrt 1927“: Scherenschnitt-Silhouette zweier Wandernder mit Rucksack vor einer Berglandschaft." },
    { datei: "bilder/003-fahrten-schleuse.jpg",
      unterschrift: "„Die Hermsdorfer Schleuse. Und das Wehr.“ Zeichnung von Erich Fratzke. Mitte Museum, HMW AB 878/300018",
      alt: "Aquarellierte Zeichnung: Eine Schleuse mit Holzbrücke über grünlichem Wasser, rechts und links Bäume. Darunter die Beschriftung „Die Hermsdorfer Schleuse. Und das Wehr. E. Fratzke“." },
    { datei: "bilder/003-fahrten-jugendherberge.jpg",
      unterschrift: "„Die Jugendherberge in Neu-Vehlefanz.“ Bleistiftzeichnung von Erich Fratzke. Mitte Museum, HMW AB 878/600016",
      alt: "Bleistiftzeichnung eines Hauses mit großem Dach hinter einem Lattenzaun und einem Baum. Oben die Beschriftung „Die Jugendherberge in Neu-Vehlefanz“." }
  ],
  text: "Keine Diktate, keine Abschriften: Die Kinder schreiben eigene Beobachtungen und Geschichten auf. In Alfred Zettls Klassenzimmer bemalt ein ehemaliger Schüler die Wände mit historischen Szenen, und die Eltern sparen Stahlrohrstühle an, damit sich im Unterrichtsgespräch alle ansehen können. In jedem Klassenraum steht ein Aquarium. Ein Reporter der BZ am Mittag nennt die Schule im Mai 1931 das Reich der Kinderträume.",
  transkript: `Rektor Max Kreuziger beginnt, die 308. Gemeindeschule zu verwandeln, gemeinsam mit seinem Kollegen Bruno Stephan und dem restlichen Kollegium.

Das Zentrum dieser Verwandlung ist ein Begriff, der in der Reformpädagogik dieser Jahre wie ein Schlüssel kursiert: freier Ausdruck. Die Idee: Kinder sollen nicht nachahmen, nicht wiederholen, nicht auswendig lernen. Sie sollen sich Raum nehmen und ausdrücken, was sie sehen. Was sie denken. Was sie fühlen.

Das klingt heute selbstverständlich. Damals ist es eine kleine Revolution.

An der 308. Gemeindeschule bedeutet freier Ausdruck: Die Kinder schreiben eigene Texte – keine Diktate, keine Abschriften, sondern eigene Beobachtungen, eigene Geschichten, eigene Gedanken. Ein Mädchen schreibt 1925 einen Schulaufsatz. Mitten im Text unterbricht sie sich: „Ich meine, das gehört doch nicht zum Schulunterricht.“ Dann schreibt sie weiter. Was die Kinder beschäftigt, gehört in diese Schule. Ein anderes Kind schreibt über das Sommerfest. Lehrer Bruno Stephan fotografiert dort jedes Mal, und ein paar Tage später können die Kinder die Bilder bei ihm kaufen. „Die hebe ich auf, als Andenken“, schreibt das Kind.

Die Kinder zeichnen, was sie sehen, und sie gestalten ihren Klassenraum mit. In Lehrer Alfred Zettls Klassenzimmer hat ein ehemaliger Schüler, inzwischen selbst Kunsterzieher, die Wände bemalt – mit Illustrationen historischer Geschehnisse. Nicht als Dekoration. Als Einladung. Die Bilder sollen Gespräche auslösen, Fragen, Assoziationen. Der Raum selbst wird zum pädagogischen Werkzeug.

Auch die alte Ordnung weicht: Weg von der starren Bankreihe, die nur Frontalunterricht zulässt. Neue Stahlrohrstühle stehen jetzt im Klassenzimmer – von den Eltern mühsam angespart, damit die Kinder sich im Unterrichtsgespräch anschauen können. Und dann sind da die Aquarien: Goldfische, Schnecken, Krebse, Salamander, Frösche – in jedem Klassenraum. Als Beobachtungsobjekte, als Gesprächsanlässe, als lebendige Welt, die in den Unterricht hineinragt. Die Kinder sollen schauen. Beschreiben. Staunen.

Ein Reporter der „BZ am Mittag“ schreibt im Mai 1931 begeistert: Die 308. Gemeindeschule sei „das Reich der Kinderträume“. Auf den Tischen Blumentöpfe. An den Wänden Bilder. Die Kinder sollten sich, so Alfred Zettl, im Unterrichtsraum wohl und aufgehoben fühlen – als gehöre dieser Raum ihnen.`
},

{
  nr: "004",
  titel: "Schreiben lernen",
  bilder: [
    { datei: "bilder/004-ausflug.jpg",
      unterschrift: "Der Schüler Kurt übt die deutsche Schreibschrift Sütterlin: spitz, eng, mit Schleifen und langem s. Nebenbei erzählt er von einem Ausflug über Rosenthal und Lübars nach Waidmannslust. Die Kinder spielen Völkerball, weil die Gruppe auf zwei Mädchen warten muss. Mitte Museum, HMW AB 888/00001",
      alt: "Heftseite in Sütterlinschrift mit einem Rand aus roten und gelben Buntstiftdreiecken. Ein Kind erzählt von einem Ausflug." },
    { datei: "bilder/004-ringbahn.jpg",
      unterschrift: "Die zweite Schrift, die die Kinder lernen: eine lateinische Schreibschrift, runder und der heutigen Handschrift näher. Zwischen vorgedruckten Hilfslinien erzählt Tankred von einer Fahrt mit der Ringbahn zum Tempelhofer Feld – und wie er Willi erklärt, was „die Dinger“ an der Strecke bedeuten. Mitte Museum, HMW AB Aufsätze 308 00022",
      alt: "Aufgeschlagenes Heft, zwei Seiten in Schreibschrift mit buntem Rand, quer gedreht. Auf der Seite oben steht „Die Ringbahn“, unten eine kleine Zeichnung." }
  ],
  text: "Kinder in preußischen Schulen üben seit 1915 Sütterlin; bewertet wird die Abweichung von der Vorlage. An der 308. Gemeindeschule wird Schreiben zum Werkzeug des Kindes. Zeugnisse lehnt die Schule im Prinzip ab; weil Lehrstellen und weiterführende Schulen sie verlangen, gibt es eine Zwischenregelung ohne Noten. Der Lehrplan ordnet das Schreiben Themenkreisen zu, vom Körper des Kindes bis zu „Unser Wedding“.",
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
    { datei: "bilder/005-unsere-zeitung-s1.jpg",
      unterschrift: "„Es war im Frühjahr 1926 als wir die Klassenzeitung gründeten.“ Zwei Jahre später schreibt Horst Fink auf, wie alles anfing: Zusammen mit Heinz Schunke und Hans Gebhard hat er die Zeitung gegründet, am 1. Mai erscheint die erste Nummer. Das eingeklebte Foto zeigt drei Kinder beim Schreiben, auf dem Tisch ein Spitzendeckchen und Weidenkätzchen. Mitte Museum, HMW AB 885.17",
      alt: "Handgeschriebene Heftseite „Unsere Zeitung“ mit einem eingeklebten Foto: Drei Kinder schreiben an einem Tisch mit Spitzendeckchen." },
    { datei: "bilder/005-unsere-zeitung-s2.jpg",
      unterschrift: "„Unsere Zeitung“, Seite 2, H. Fink, 1928. Mitte Museum, HMW AB 885.17",
      alt: "Handgeschriebene Heftseite. Horst Fink schreibt, die Hälfte der Klasse habe noch keinen einzigen Aufsatz für die Zeitung geschrieben." },
    { datei: "bilder/005-erste-nummer-s8.jpg",
      unterschrift: "„Alle Kinder aus unserer Klasse Können Aufsätze, Märchen und Geschichten, an Herrn Mäcke abliefern“: Mit diesem Aufruf von Heinz Schunke endet die allererste Nummer im Mai 1926. Unter zwei Rätseln nennt sich die Klasse selbst als Herausgeberin: „Druck u. Verlag. 3. Kl.“. Mitte Museum, HMW AB 885.2",
      alt: "Handgeschriebene Heftseite 8 der ersten Nummer: oben der Aufruf an die Klasse, Beiträge abzuliefern, darunter zwei Rätsel." },
    { datei: "bilder/005-marktszene.jpg",
      unterschrift: "Photograph, Obsthändler, Leierkasten: Heinz Schunke zeichnet 1926 eine Straße voller Leben und schreibt dazu, wer dort arbeitet. An der Litfaßsäule wirbt ein Plakat für ein großes Kinderfest. Mitte Museum, HMW AB 885.4",
      alt: "Tuschezeichnung einer Straßenszene: Ein Obsthändler mit Karren, ein Leierkastenmann, ein Fotograf mit Stativ, links eine Litfaßsäule mit Plakat. Die Figuren sind beschriftet." },
    { datei: "bilder/005-streik-der-steine.jpg",
      unterschrift: "Steine auf Demonstration: Auf dem Titel vom 1. März 1927 ziehen sie mit Fahnen und Schildern durch die Straßen. Die Geschichte dazu erzählt vom Streik der Steine in Berlin-Mitte, angeführt vom Rüdersdorfer Kalkstein. Ihre Forderung: „Wir wollen nicht mehr getreten und so mißhandelt werden.“ Mitte Museum, HMW AB 885.9",
      alt: "Aquarellierte Titelseite der Gemeinschaftszeitung vom 1. März 1927: Steinfiguren mit Fahnen und Schildern ziehen in einem Demonstrationszug. Darunter steht „Der Streik der Steine“." },
    { datei: "bilder/005-linolschnitt.jpg",
      unterschrift: "„Sammelt für die Zeitung Aufsätze.“ In bunten Buchstaben ruft das Heft vom Juli 1927 wieder zum Mitschreiben auf. Darunter beginnt eine Anleitung zum Linolschnitt, streng im Ton: Sie sei „nur für denjenigen der kein Fuscher ist“. Die Federn gibt es bei Heintze & Blanckertz für zehn Pfennig das Stück. Im nächsten Heft verrät Hans Gebhard, dass es in der Linoleumlegerei Schäfer an der Ecke Reinickendorfer und Schererstraße „für einen Groschen ein schönes großes Stück Linoleum“ gibt. Mitte Museum, Gemeinschaftszeitung Jg. 2, Nr. 7, Juli 1927",
      alt: "Handgeschriebene Heftseite mit der bunten Überschrift „Sammelt für die Zeitung Aufsätze“ und dem Beginn einer Anleitung zum Linoleumschnitt." },
    { datei: "bilder/005-heintze-anzeige.jpg",
      unterschrift: "Die Federn, mit denen die Kinder schreiben, zeichnen und schneiden, kommen oft aus Berlin. Heintze & Blanckertz, gegründet Mitte des 19. Jahrhunderts, gilt als erste Schreibfedernfabrik Deutschlands. Anzeige in der Illustrierten „Die Woche“, 22.10.1904. Quelle: Wikimedia Commons",
      alt: "Gedruckte Anzeige der Firma Heintze & Blanckertz, Berlin: Winkelspitzenfedern, daneben das Firmenzeichen mit Federn und der Satz „Erste deutsche Stahlfederfabrik“." },
    { datei: "bilder/005-titelblatt-1928.jpg",
      unterschrift: "Zwei Jahre Gemeinschaftszeitung: Die Jubiläumsausgabe erscheint am 1. Mai 1928. Auf dem Titel zieht ein Demonstrationszug mit roten Fahnen unter der aufgehenden Sonne, dazu die Losung „Proletarier aller Länder vereinigt Euch!“ und eine Zeile aus dem Arbeiterlied „Brüder, zur Sonne, zur Freiheit“. Mitte Museum, HMW AB 885.20",
      alt: "Aquarellierter Titel der Gemeinschaftszeitung zum 1. Mai 1928: Rote Strahlen einer aufgehenden Sonne, darunter ein Demonstrationszug mit Fahnen." }
  ],
  text: "Am 1. Mai 1926 erscheint die erste Ausgabe der Gemeinschaftszeitung, geschrieben, gezeichnet und aquarelliert von Hand. Die Redaktion wechselt, pünktlich erscheint die Zeitung nicht immer, und Horst Fink schreibt, die Hälfte der Klasse habe noch keinen Aufsatz geliefert. Zwanzig Hefte sind erhalten. Korrekturen von Lehrerhand findet man darin nicht.",
  transkript: `„Es war im Frühjahr 1926, als wir die Klassenzeitung gründeten.“ So beginnt Horst Fink die Geschichte der Gemeinschaftszeitung. Am 1. Mai erscheint die erste Ausgabe. Heft für Heft entsteht sie von Hand: geschrieben, gezeichnet, aquarelliert. Drei Jungen bauen die erste Nummer gemeinsam auf: Horst Fink, Heinz Schunke und Hans Gebhard.

Die Redaktion wechselt. Erst führt Heinz Schunke das „Zeitungsamt“, dann Hans Gebhard. Das ist mehr als Schulalltag. Nach 1918 setzen Bildungsreformer auf Schülerselbstverwaltung: Kinder sollen Demokratie selbst ausüben, mit eigenen Ämtern und eigener Verantwortung. Was wie ein Spiel wirkt, ist zugleich gelebte Selbstverwaltung. Pünktlich erscheint die Zeitung nicht immer. Horst Fink schreibt unverblümt: „Ich könnte nämlich beweisen, dass die Hälfte unserer Klasse noch keinen einzigen Aufsatz für die Zeitung geschrieben hat.“

Schon in der ersten Ausgabe steht ein Gedicht von Heinz Schunke: „In der Christlichen Schule“. Es handelt vom Gebet vor der ersten Stunde, vom Nachsitzen, vom Rohrstock. Ob Schunke selbst eine solche Schule besucht hat, wissen wir nicht. Er reimt: „Kannst du nicht das Einmaleins, gibt es mit dem Rohrstock eins.“

Danach schreiben viele mit, jedes Kind anders. H. Gebhard erklärt, wie man Linolschnitte macht, mit genauen Preisen: An der Ecke Reinickendorfer und Schererstraße gebe es „für einen Groschen ein schönes großes Stück Linoleum“. S. Schmoller berichtet vom Schwimmen und von einem Schneemann im Grunewald, mit exakten Maßen. L. Dammasch erzählt von einem Jungen, der heimlich die Wohnung putzt, während die Mutter schläft.

Und manchmal steht eine ganz kleine Geschichte darin. Sie heißt „Unsere Angst“, März 1928: „Als wir gegen Herrn Eckerts Klasse ein Fußballwettspiel machten und ziemlich zu Ende waren, rief auf einmal ein Junge: ‚Der Mann mit dem Hund kommt!‘ Nun rannten wir alle gleich von dem Platz herunter.“

Zwanzig Hefte sind übrig. Dass es sie noch gibt, verdankt sich einem Lehrer, der sie aufhob. Korrekturen von Lehrer*innenhand findet man darin nicht.`
},

{
  nr: "006",
  titel: "Der Garten und die Kakaoküche",
  bilder: [
    { datei: "bilder/006-schulgarten-postkarte.jpg",
      unterschrift: "„308. Volksschule – Schulgarten“ steht über dem Tor. Auf Land der St.-Aloysius-Kirche, heute Teil des Schillerparks, bauen Familien Gemüse an. Die Ernte geht an die Schulküche. Die Postkarte vom August 1930 ist an Bruno Stephan adressiert, mit Dank für seine Hilfe. Mitte Museum, HMW PK 191",
      alt: "Postkarte: Ein weißes Gartentor mit dem Schild „308 Volksschule Schulgarten“, dahinter Beete, Büsche und Bäume." },
    { datei: "bilder/006-gartenarbeit.jpg",
      unterschrift: "Mit Spaten und Schaufel: Kinder und Erwachsene graben gemeinsam den Schulgarten der 308. Gemeindeschule um. Mitte Museum, HMW-FS AB 326",
      alt: "Altes Foto: Kinder und Erwachsene graben mit Spaten und Schaufeln ein Stück Land um, im Hintergrund Bäume." },
    { datei: "bilder/006-aufruf.jpg",
      unterschrift: "„Unser Schulgarten ruft.“ Mit diesem Aufruf suchen Elternausschuss und Lehrer*innen Unterstützung aus allen Familien – wer mitarbeitet, bekommt ein eigenes Stück Land. Mitte Museum, HMW AB 888/00011_1",
      alt: "Maschinengeschriebener Aufruf mit einer gezeichneten Figur mit weit geöffnetem Mund, darin die Worte „Unser Schulgarten ruft“. Unten ein Abschnitt zum Ausfüllen." }
  ],
  text: "Die Schule hat einen Garten, und der Garten ist Unterricht: Im September 1925 schreiben die Schüler auf, wie sich das Land am besten für die Gemeinschaft nutzen ließe. Familien bauen Gemüse an, die Ernte geht an die Schulküche. Dort kochen Eltern für die bedürftigsten Kinder; einkaufen, Tisch decken, abwaschen und die Abrechnung führen die Kinder selbst. Jede Klasse hat außerdem ihre eigene Kakaoküche, betrieben von Müttern nach festem Plan.",
  transkript: `An der 308. Gemeindeschule endet Schule nicht an der Klassentür. Das Kollegium denkt größer.

Die Schule hat einen Garten. Und der Garten ist kein Schmuck. Er ist Unterricht. Die Kinder pflanzen, ernten, beobachten das Wachsen. Im September 1925 äußern sich die Schüler schriftlich darüber, wie das Gartenland möglichst einträglich für die Gemeinschaft genutzt werden könnte. Der Garten ist Biologieunterricht, Schreibanlass, Gemeinschaftsprojekt. Und für Kinder, die zuhause keinen Quadratmeter Grün haben, ist er noch etwas anderes: ein Erfahrungsraum, den sie sonst nicht kennen würden.

Eine Postkarte vom August 1930 zeigt ihn: „308. Volksschule – Schulgarten“ steht über dem Tor. Es ist Land der St.-Aloysius-Kirche, im Schillerpark. Familien bauen Gemüse an, die Ernte geht an die Schulküche.

Dort bereiten Väter und Mütter das Mittagessen für die bedürftigsten Kinder der Schule zu. Die Kinder selbst sind dabei keine Zuschauer: Sie kaufen ein, decken den Tisch, waschen ab und führen die Abrechnung der Küche. Für eine gewisse Zeit ist die Schulküche ganz offiziell Aufgabe einer der oberen Klassen.

Zudem hat jede Klasse ihre eigene Kakaoküche, in einem Vorraum zum Klassenzimmer. Lehrer Bruno Stephan erinnert sich noch Jahrzehnte später daran. Er schreibt: „Die Kakaoküche lag in den Händen der Mütter, die sich drei um drei Tage nach festem Plan dafür zur Verfügung stellten.“

Auch Clara Grunwald, die Hygienebeauftragte der Schule und überzeugte Montessori-Pädagogin, lädt zum Kakao ein. Nach den bezahlten Stunden bittet sie ihre Schüler*innen in ihre Wohnung, die Eltern zur Beratung.

Schule ist kein Gegenraum zum Leben, sondern seine Fortsetzung. Ein Ort, den Eltern, Kinder und Lehrkräfte gemeinsam tragen.`
},

{
  nr: "007",
  titel: "Montagabend, achtzehn Uhr",
  bilder: [
    { datei: "bilder/007-einladung.jpg",
      unterschrift: "„Niemand darf fehlen!“ Im November 1930 lädt die 308. zur großen Elternversammlung in die Turnhalle. Bruno Stephan spricht über den Wert der Mitarbeit der Eltern – eine Reformschule wie die 308. Gemeindeschule lebt davon, dass Eltern sie mittragen. Mitte Museum, HMW AB 888/00012_1",
      alt: "Maschinengeschriebene Einladung: Achtung! Montag, 10. November 1930, abends 8 Uhr, Große Elternversammlung in der Turnhalle. Thema: Vom Wert der Mitarbeit der Eltern an der Schule. Niemand darf fehlen!" },
    { datei: "bilder/007-chor.jpg",
      unterschrift: "Der gemischte Chor der 308. Gemeindeschule, 1927. Mit einem Kreuz markiert sind zwei Lehrer der Schule: Oskar Eckert (mittlere Reihe, mit Brille) und Hans Schneider (vorn). Mitte Museum, HMW-FS AB 327",
      alt: "Gruppenfoto des Chors in mehreren Reihen vor einer Holzbaracke. Zwei Personen sind mit einem Kreuz markiert." },
    { datei: "bilder/007-programmzettel.jpg",
      unterschrift: "1928 bringt die 308. Gemeindeschule ein Märchen der Brüder Grimm auf die Bühne, mit Musik und Tanz: „Das Glückskind, oder der Teufel mit den drei goldenen Haaren“. Programm für die Aufführung am 20. April. Mitte Museum, HMW AB 888/00013_2",
      alt: "Gedrucktes Programm in einem Zierrahmen: Freitag, den 20. April 1928, Bühnenspiel „Das Glückskind, oder der Teufel mit den drei goldenen Haaren“, mit Bildfolge und Besetzung." }
  ],
  text: "Jeden Montag von achtzehn bis zwanzig Uhr tagt der Elternausschuss: drei gewählte Vertreter aus jeder der fünfzehn Klassen, mit dem Kollegium zusammen rund sechzig Personen. Oskar Eckert baut neben dem Schülerchor auch einen Elternchor auf. Zum Sommerfest 1931 kommen einige tausend Menschen auf den Leopoldplatz, mit Fackelzug und Aufführungen der Kinder. Das Jahresmotto lautet: Es war einmal.",
  transkript: `An der 308. Gemeindeschule gehört der Montagabend den Eltern.

Jeden Montag, von achtzehn bis zwanzig Uhr, tagt der Elternausschuss. Aus jeder der fünfzehn Klassen kommen drei gewählte Vertreter. Mit dem Kollegium zusammen sind es rund sechzig Menschen. Es gilt Teilnahmepflicht. Einmal im Monat kommen dann, in jeder Klasse einzeln, alle Eltern zusammen. Hier, sagt Kreuziger selbst, sei die Aussprache „naturgemäß lebhafter“.

Die Eltern sind keine Adressaten, die über das Tun der Schule informiert werden. Sie sind Teil des Ganzen. Sie sparen Stühle an, sie bringen Kuchen, sie organisieren das Sommerfest, sie singen im Elternchor. Lehrer Oskar Eckert hat nicht nur einen Schülerchor und einen gemischten Chor aufgebaut, sondern auch einen Elternchor und einen Männerchor.

Das Sommerfest 1931 ist – wie alle anderen Feste – ein Großereignis. Laut der Vossischen Zeitung vom 23. August 1931 strömen einige tausend Menschen auf den Leopoldplatz. Es gibt einen Fackelzug, Kaffeeküchen, Aufführungen der Kinder. Das Jahresmotto: „Es war einmal …“ Eine Schule, die sich selbst als Lebensgemeinschaft versteht, feiert auch gemeinsam.

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
      unterschrift: "„Es ist beinahe so, als wenn man lauter Gefängnisgebäude sieht.“ So beschreibt Herbert Seidel, Schüler der 308. Gemeindeschule, seine Bornemannstraße: eine kleine Querstraße, kahle Häuser, fast keine Balkone. Mitte Museum, HMW AB 888/00014_1",
      alt: "Maschinengeschriebener Aufsatz von Herbert Seidel mit dem Titel „Das Gesicht meiner Straße“." },
    { datei: "bilder/008-berndt.jpg",
      unterschrift: "„Der Kampf um Licht, Luft und Sonne“ – so überschreibt Margarete Berndt im November 1925 ihren Aufsatz über Familien, die zu zwölft in einem Zimmer ohne Fenster leben. Dieselben drei Worte sind auch die Parole des Reformwohnungsbaus: Ab 1924 entsteht im Wedding Bruno Tauts Siedlung Schillerpark, heute UNESCO-Welterbe. Mitte Museum, HMW AB 888/00014_3",
      alt: "Maschinengeschriebener Aufsatz von Margarete Berndt vom 26.11.1925 auf grauem Papier, Titel „Der Kampf um Licht, Luft und Sonne“." },
    { datei: "bilder/008-waermehalle.jpg",
      unterschrift: "Wer zu Hause nicht heizen kann, wärmt sich hier: die Wärmehalle in der Lütticher Straße 8, um 1927. Fotografie: Georg Wilke. Sammlung Mitte Museum",
      alt: "Schwarzweißfoto: In einer Halle sitzen überwiegend ältere Männer in dunkler Kleidung an Tischen mit Tassen, einige lesen Zeitung." },
    { datei: "bilder/008-badeanstalt.jpg",
      unterschrift: "„Zuerst brausten wir uns ordentlich ab. Nachher übten wir Schwimmen.“ Titelbild der Gemeinschaftszeitung vom 1. Februar 1927. Mitte Museum, HMW AB 885.9",
      alt: "Aquarellierte Titelseite der Gemeinschaftszeitung vom 1. Februar 1927: eine Schwimmhalle mit Rundbögen und Kabinenreihen, unten Schwimmende im Becken, darunter „Von der Badeanstalt“." },
    { datei: "bilder/008-volksbad.jpg",
      unterschrift: "Wer zu Hause kein Bad hat, kommt hierher: 88 Brausen, 77 Wannen und zwei Schwimmhallen, getrennt für Männer und Frauen. Die Männerschwimmhalle der Volksbadeanstalt Gerichtstraße, kurz nach der Eröffnung 1908. Architekturmuseum der TU Berlin, Inv. Nr. B 2380,011",
      alt: "Gedruckte Buchseite mit Fotografien und Bauplänen des Volksbads Gerichtstraße. Unten rechts die Männerschwimmhalle mit Rundbögen." },
    { datei: "bilder/008-drachenzeit.jpg",
      unterschrift: "„Jung und alt begibt sich zum Schillerpark“, schreibt H. Fink im Oktober 1926 über die Drachenzeit. Bis heute trifft sich der Wedding auf den großen Wiesen des Parks. Eine davon heißt Schülerwiese: Angelegt wurde sie für den Schulsport, im Winter diente sie als Eisbahn. Mitte Museum, HMW AB 885.4",
      alt: "Aufgeschlagenes Heft: links ein Zahlenrätsel, rechts der Beitrag „Die Drachenzeit“ mit einer Zeichnung steigender Drachen, unterzeichnet H. Fink." },
    { datei: "bilder/008-sportplatz.jpg",
      unterschrift: "Im Winter wird der Sportplatz an der Behmstraße zur Eisbahn. Damals heißt er nach seinem Besitzer Schebera-Platz. Heute ist der Norden-Nordwest-Platz Deutschlands ältester noch existierender Vereinssportplatz. Mitte Museum, HMW PK 301",
      alt: "Postkarte „Gruss vom Sportplatz“ mit zwei verschneiten Ansichten: oben ein Platz mit Gebäude und Menschen im Schnee, unten ein Haus zwischen Tannen." },
    { datei: "bilder/008-nordiska.jpg",
      unterschrift: "Mai 1921, Freundschaftsspiel an der Behmstraße: Der BFC Nordiska, damals Berliner Meister im Arbeiterfußball, schlägt den BC Saxonia Erfurt 5:2. Dicht gedrängt stehen die Zuschauer*innen am Spielfeldrand, dahinter die Mietshäuser des Wedding. Bis 1933 bleibt der Platz eine Bühne des Arbeiterfußballs: Am 29. Januar 1933, einen Tag bevor Hitler Reichskanzler wird, spielt hier zum letzten Mal eine Berliner Arbeiterauswahl. Scan: Christian Wolter, arbeiterfussball.de",
      alt: "Altes Schwarzweißfoto eines Fußballspiels: Spieler im Zweikampf auf dem Rasen, am Rand dicht gedrängt Zuschauer, dahinter Mietshäuser." }
  ],
  text: "Der Wedding der Weimarer Republik gehört zu den ärmsten Bezirken Berlins: Über 350.000 Menschen leben 1920 hier, im Sommer 1926 sind rund 30.000 auf Unterstützung angewiesen. Die Kinder der 308. Gemeindeschule wohnen meist in Einzimmerwohnungen. Der Bezirk organisiert sich in Arbeiterwohlfahrt, Gewerkschaften und Vereinen und wird zum „Roten Wedding“; am 1. Mai 1929 sterben beim „Blutmai“ mehr als dreißig Menschen. In diesem Viertel gibt der freie Ausdruck den Kindern die Sprache für das, was sie kennen.",
  transkript: `Vor dem Schultor beginnt der Wedding der Weimarer Republik, einer der ärmsten Bezirke Berlins.

Über 350.000 Menschen leben hier 1920, fast jeder zehnte Berliner. Ringsum stehen Mietskasernen und Fabriken: Borsig, AEG, Schering, Osram. Wer hier wohnt, arbeitet oft in einer von ihnen, wenn überhaupt. Im Sommer 1926 sind rund 30.000 Menschen im Wedding auf Erwerbslosenunterstützung oder Wohlfahrt angewiesen.

Die Not reicht bis in die Wohnungen der Schulkinder. „Nur wenige Eltern verfügen über zwei Zimmer. Die Regel ist die Einzimmerwohnung“, hält die Schule fest. Eltern, Kinder und Geschwister teilen sich oft ein einziges Bett.

Der Bezirk organisiert sich. Die Arbeiterwohlfahrt entsteht Ende 1919 als Antwort auf Hunger und Massenelend, mit Volksküchen und Nähstuben. Dazu kommen Gewerkschaften, Sportvereine und Bildungszirkel, zu großen Teilen getragen von SPD und KPD. Auch die Schulküche, in der Eltern für die bedürftigsten Kinder kochen, gehört in diese Reihe. So bekommt der Bezirk seinen Namen: der Rote Wedding.

Zum Vereinsleben gehört der Fußball. An der Behmstraße liegt ein Platz, der damals noch nach seinem Besitzer Schebera-Platz heißt. Dicht gedrängt stehen die Zuschauer auf einem Foto am Spielfeldrand, dahinter die Mietshäuser. Im Winter wird der Platz zur Eisbahn.

Wie hart die Gegensätze im Viertel aufeinandertreffen, zeigt der 1. Mai 1929. Polizeipräsident Zörgiebel, ein Sozialdemokrat, verhängt ein Demonstrationsverbot. Die KPD ruft trotzdem auf. Tausende ziehen los, 13.000 Polizisten gehen gegen sie vor. Drei Tage dauern die Unruhen. Mehr als dreißig Menschen sterben durch Polizeischüsse, auch Unbeteiligte. Als „Blutmai“ geht das in die Geschichte ein.

Die Kinder, die an der 308. Gemeindeschule lernen, wachsen in einer Welt auf, in der politische Überzeugungen Familien spalten, in der Armut ein täglicher Begleiter ist, in der die Straße laut und das Zuhause eng ist. Aus dieser Welt schreiben sie auch. Wenn H. Gebhard in der Klassenzeitung verrät, wo man an der Ecke Reinickendorfer und Schererstraße Linoleum für einen Groschen bekommt, nennt er eine Adresse aus dem Viertel.

Der freie Ausdruck, den Kreuziger und seine Kolleg*innen fordern, ist auch deshalb so bedeutsam: Er gibt diesen Kindern die Sprache für das, was sie kennen. Er sagt ihnen: Was ihr erlebt, ist es wert, aufgeschrieben zu werden.`
},

{
  nr: "009",
  titel: "Nach Paragraph 4",
  bilder: [
    { datei: "bilder/009-kollegium.jpg",
      unterschrift: "Das Kollegium der 308. bei einer Sitzung. Zweiter von links: Max Kreuziger, daneben Heinrich Mäcke. In der Mitte schreibt Bruno Stephan, neben ihm Alfred Zettl. Rechts, lachend: Else Hiebsch. Mitte Museum, HMW-FS AB 328",
      alt: "Sepiafarbenes Foto: Frauen und Männer sitzen um einen Sitzungstisch unter einer hellen Lampe, einige schreiben." }
  ],
  text: "1933 leiten Heinrich Mäcke und Else Hiebsch die Schule. Beide werden noch im selben Jahr nach Paragraph 4 des Gesetzes zur Wiederherstellung des Berufsbeamtentums aus dem Dienst entfernt, mit dem der nationalsozialistische Staat Beamte als politisch unzuverlässig entlassen kann. Max Kreuziger, inzwischen Schulrat, kommt in ein Konzentrationslager und schließt sich später der Widerstandsgruppe um Ernst von Harnack an. Bertha Schübel, Bruno Stephan und Alfred Zettl werden versetzt, Bücher aus der Schüler- und der Elternbücherei werden verbrannt. Im Schuljahr 1933/34 werden alle Berliner Lebensgemeinschaftsschulen aufgelöst.",
  transkript: `Am 29. Januar 1933 spielt an der Behmstraße im Wedding zum letzten Mal eine Berliner Arbeiterauswahl, gegen Dresden. Zwölftausend Zuschauer sind gekommen.

Am nächsten Tag, am 30. Januar 1933, wird Adolf Hitler Reichskanzler.

An der 308. Gemeindeschule ändert sich zunächst nichts, was man von außen sehen kann.

Am 13. März versammeln sich noch einmal Eltern der Schulanfänger in der Turnhalle. Der Vortrag trägt den Titel: „Was muß jeder Vater u. jede Mutter von dem Wesen u. von der Arbeit in unserer Schule wissen?“ Es ist einer der letzten Abende, an denen diese Schule so zusammenkommt.

Kreuziger selbst ist zu diesem Zeitpunkt längst nicht mehr Rektor der 308. Gemeindeschule – schon Ende der zwanziger Jahre war er zum Schulrat für den Bezirk Wedding aufgestiegen. Die Schule leiten inzwischen zwei andere: Rektor Heinrich Mäcke und Konrektorin Else Hiebsch. Beide werden noch 1933 „nach Paragraph 4“ des Gesetzes zur Wiederherstellung des Berufsbeamtentums aus dem Dienst entfernt – jenem Gesetz, das es dem nationalsozialistischen Staat erlaubt, Beamte zu entlassen, die als politisch unzuverlässig gelten.

Auch Kreuziger selbst, inzwischen Schulrat, wird Opfer dieses Gesetzes. Nach seiner Entlassung wird er in einem Konzentrationslager interniert. Nach seiner Freilassung taucht er – nach Auskunft seines früheren Kollegen Alfred Zettl – vorübergehend bei diesem unter. Er schließt sich der Widerstandsgruppe um Ernst von Harnack an. Er überlebt die Zeit bis 1945 und arbeitet danach im Schulwesen der DDR.

Auch die anderen werden versetzt, degradiert, zum Schweigen gebracht. Bertha Schübel, die Hauswirtschaftslehrerin, wird im April 1934 „zur Bewährung“ nach Neukölln versetzt – ein bürokratischer Ausdruck für das Verstummen einer Stimme. Bruno Stephan geht im Herbst 1934 nach Reinickendorf. Alfred Zettl wird im April 1935 nach Charlottenburg versetzt.

Clara Grunwald, die Hygienebeauftragte der Schule, wird als Jüdin verfolgt und 1943 nach Auschwitz deportiert und ermordet.

Alfred Zettl erinnert sich auch an das, was in der Schule verbrannt wurde: Bücher aus der umfangreichen Schülerbücherei, aus der von ihm eingerichteten Elternbücherei. Und die schwarz-rot-goldene Fahne wird in die Flammen geworfen.

Im Laufe des Schuljahres 1933/34 lösen die Behörden alle Berliner Lebensgemeinschaftsschulen auf. Ihr demokratischer, kritischer Geist gilt als Fremdkörper. An der 308. Gemeindeschule werden Mädchen und Jungen wieder getrennt unterrichtet.

Was zehn Jahre lang aufgebaut wurde, wird ausgetrieben. Planmäßig, gründlich, schnell.

Am 26. Januar 1937 brennt die Turnhalle fast vollständig ab. Die verkohlten Überreste stehen zwei Jahre lang.

1943 stehen in den Baracken, in denen der Chor probte und die Kakaoküchen standen, Schreibtische des Ernährungsamts, des Wirtschaftsamts und einer Lebensmittelkartenstelle. Nach 1943 werden fast alle Baracken im Krieg zerstört.`
},

{
  nr: "010",
  titel: "Vierzig Jahre später",
  bilder: [
    { datei: "bilder/010-sommerfest-tanz.jpg",
      unterschrift: "„Volkstänze und Wandertrachten“ lautet 1929 das Motto des Sommerfests. In bestickten Kleidern, mit Blumenkränzen und einem Zylinder tanzen Mädchen auf dem Rasen vor den Schulbaracken. Mitte Museum, HMW-FS AB 316",
      alt: "Altes Foto: Mädchen in Festkleidern und mit Blumenkränzen tanzen auf einer Wiese, im Hintergrund stehen Holzbaracken." }
  ],
  text: "Von der Schule geblieben sind Erinnerungen, an die Aquarien, an den Kakao, an Kreuziger, Zettl und Eckert. Bruno Stephan blickt vierzig Jahre später zurück und findet eine Sache besonders erstaunlich: dass sich Montag für Montag, über all die Jahre, immer wieder genug Eltern für die Ausschusssitzungen fanden.",
  transkript: `Von der 308. Gemeindeschule bleiben Erinnerungen.

Von Lehrkräften, Eltern, ehemaligen Schüler*innen, die Jahrzehnte später noch von dieser Schule erzählen. Von den Aquarien und Sommerfesten. Von Max Kreuziger, der die Schule zu dem gemacht hat, was sie war. Von Alfred Zettl, in dessen Klassenzimmer die Wände erzählten. Von Oskar Eckert, der einen Chor mit allen gründete, die er gewinnen konnte – Kinder als auch Eltern.

Bruno Stephan blickt vierzig Jahre später zurück. Er nennt es „eine auch im Rückblick noch fast unglaubliche Leistung“ – dass sich für die zeitraubenden Elternausschusssitzungen, Montag für Montag, all die Jahre über, immer wieder Menschen fanden, die mitmachten.

Vielleicht liegt das Unglaubliche auch in etwas anderem. Kreuziger und seine Kolleg*innen haben etwas geglaubt, das so einfach klingt und so selten wirklich ernst genommen wird: Dass Kinder nicht erst dann etwas zu sagen haben, wenn sie erwachsen sind. Dass ihre Sprache, ihre Erfahrungen, ihre Welt der Stoff ist, aus dem Bildung werden muss.`
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
      alt: "Das Titelblatt Jahrgang 2, Nr. 8 in Folie auf einem Holztisch, daneben weitere Hefte und eine Hand mit Handschuh." }
  ],
  text: "2025 üben Schüler*innen der Herbert-Hoover-Schule im Rahmen des Workshops „Calliversity“ mit dem Kalligrafen Daniel Arab den Umgang mit Feder und Tinte. Im Frühjahr 2026 lesen dieselben Schülerinnen und Schüler im Mitte Museum die Originale mit Baumwollhandschuhen und schreiben weiter: Aus Fragen der alten Artikel werden eigene Texte. Ihre Zeitung liegt in der Ausstellung neben den Originalen.",
  transkript: `2025 lernen Schüler*innen eines Kunstkurses der Herbert-Hoover-Schule im Workshop „Calliversity“ vom Kalligrafen Daniel Arab den Umgang mit Feder und Tinte. Am Ende stehen Kalligrafien, in denen die Sprachen der Klasse zu sehen sind. Schrift, die sich von der Bedeutung einzelner Wörter löst und von der Vielfalt der Sprachen erzählt, die diese Klasse spricht.

Im Frühjahr 2026 kommen dieselben Schüler*innen ins Mitte Museum und nehmen die Hefte der 308. Gemeindeschule in die Hand. Sie tragen Baumwollhandschuhe. Es wird still im Raum. Die Handschriften sind hundert Jahre alt und fremd, sie wollen entziffert werden. Manche Straßen und Orte, von denen die Kinder damals schrieben, gibt es im Bezirk noch heute.

Fragen aus den alten Artikeln werden zu Anlässen für eigene Texte: über Zuhause, über Mut, über den Kiez, über die Zukunft. Viele gehen weit über die Ausgangsfrage hinaus. Im Kunstunterricht zeichnen die Schüler*innen ihre Texte danach mit Tinte nach und kolorieren sie so, wie der zweite Jahrgang der historischen Zeitung koloriert war. Gebunden zu einem Heft liegt die neue Gemeinschaftszeitung nun in dieser Ausstellung, neben den alten Ausgaben.`
}

];

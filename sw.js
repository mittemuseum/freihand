/* ============================================================
   FREIHAND – Hörstation: Service Worker
   Zweck: Fällt das WLAN kurz aus, laufen Texte, Bilder und Audio
   weiter. Nichts hier muss bearbeitet werden.

   - Texte, Bilder, Schriften: erst das Netz, bei Ausfall der Speicher.
     So kommen Änderungen aus GitHub von selbst an.
   - Audio: einmal geladen, bleibt es im Speicher (mit Spulen).
     Wurde eine Audiodatei ausgetauscht: Seite in Chrome einmal
     mit „Websitedaten löschen“ zurücksetzen oder VERSION erhöhen.
   ============================================================ */

var VERSION = "freihand-2";
var KERN = [
  "./", "index.html", "assets/css/style.css", "assets/js/app.js", "assets/js/kapitel.js",
  "manifest.webmanifest", "assets/img/freihand-logo.png",
  "assets/fonts/fraunces-latin-400-normal.woff2",
  "assets/fonts/hanken-grotesk-latin-400-normal.woff2",
  "assets/fonts/hanken-grotesk-latin-400-italic.woff2",
  "assets/fonts/hanken-grotesk-latin-600-normal.woff2"
];

function istAudio(url) { return /\.(mp3|m4a|ogg|wav)$/i.test(new URL(url).pathname); }

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil((async function () {
    var cache = await caches.open(VERSION);
    await Promise.all(KERN.map(function (u) { return cache.add(u).catch(function () {}); }));
    /* Bilder und Audio anhand der Kapitelliste vorladen (fehlende Dateien werden übergangen) */
    try {
      importScripts("assets/js/kapitel.js");
      var liste = [];
      KAPITEL.forEach(function (k) {
        (k.bilder || []).forEach(function (b) { if (b.datei) liste.push(b.datei); });
        if (k.bild) liste.push(k.bild);
        liste.push(k.audio || ("audio/" + k.nr + ".mp3"));
      });
      await Promise.all(liste.map(function (u) { return cache.add(u).catch(function () {}); }));
    } catch (_) {}
  })());
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

/* Browser fragen Audio stückweise an (Range). Aus dem Speicher wird das hier nachgebaut. */
async function ausschnitt(anfrage, antwort) {
  var bereich = /bytes=(\d*)-(\d*)/.exec(anfrage.headers.get("range") || "");
  if (!bereich) return antwort;
  var blob = await antwort.blob();
  var gesamt = blob.size;
  var von = bereich[1] === "" ? Math.max(0, gesamt - parseInt(bereich[2], 10)) : parseInt(bereich[1], 10);
  var bis = bereich[1] === "" || bereich[2] === "" ? gesamt - 1 : Math.min(parseInt(bereich[2], 10), gesamt - 1);
  if (von >= gesamt) return new Response(null, { status: 416, headers: { "Content-Range": "bytes */" + gesamt } });
  return new Response(blob.slice(von, bis + 1), {
    status: 206,
    headers: {
      "Content-Type": antwort.headers.get("Content-Type") || "audio/mpeg",
      "Content-Length": String(bis - von + 1),
      "Content-Range": "bytes " + von + "-" + bis + "/" + gesamt,
      "Accept-Ranges": "bytes"
    }
  });
}

async function audioHolen(anfrage) {
  var cache = await caches.open(VERSION);
  var url = anfrage.url;
  var treffer = await cache.match(url);
  if (!treffer) {
    var voll = await fetch(url);                       // immer die ganze Datei, nie nur ein Stück
    if (!voll.ok) return voll;
    await cache.put(url, voll.clone());
    treffer = voll;
  }
  return ausschnitt(anfrage, treffer);
}

async function netzZuerst(anfrage) {
  var cache = await caches.open(VERSION);
  try {
    var antwort = await fetch(anfrage);
    if (antwort && antwort.ok) cache.put(anfrage, antwort.clone());
    return antwort;
  } catch (_) {
    var treffer = await cache.match(anfrage, { ignoreSearch: true });
    if (treffer) return treffer;
    if (anfrage.mode === "navigate") { var start = await cache.match("index.html"); if (start) return start; }
    return Response.error();
  }
}

self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(istAudio(r.url) ? audioHolen(r) : netzZuerst(r));
});

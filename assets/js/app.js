/* ============================================================
   FREIHAND – Hörstation
   Übersicht, Kapitelseite, Player, Bildergalerie.
   Diese Datei muss für die Ausstellung nicht bearbeitet werden.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Einstellungen und Daten ---------- */

  var E = Object.assign({
    ausstellung: "FREIHAND",
    untertitel: "Schrift, Schule, Gemeinschaft",
    ort: "Mitte Museum",
    stationstitel: "Zum Hören",
    anleitung: "",
    ruhezeit: 120,
    impressum: "",
    datenschutz: ""
  }, typeof EINSTELLUNGEN !== "undefined" ? EINSTELLUNGEN : {});

  var LISTE = typeof KAPITEL !== "undefined" ? KAPITEL : [];

  /* Ruhezeit: in Minuten (ruhezeitMinuten) oder in Sekunden (ruhezeit) */
  var RUHE_SEK = E.ruhezeitMinuten != null ? E.ruhezeitMinuten * 60 : E.ruhezeit;
  var SPRUNG = E.sprungSekunden > 0 ? E.sprungSekunden : 15;

  var AUDIO_ENDUNG = "mp3";   // bei .m4a oder .ogg hier ändern
  function audioPfad(k) { return k.audio || ("audio/" + k.nr + "." + AUDIO_ENDUNG); }

  var haupt = document.getElementById("inhalt");
  var audio = new Audio();
  audio.preload = "auto";

  var dauern = {};         // nr -> Sekunden
  var ruheUhr = null;
  var aktuellerIndex = -1;
  var ersteAnzeige = true;
  var galerieAktiv = null; // { anzahl, pos, setze(i) }


  /* ---------- Werkzeuge ---------- */

  function zeit(sek) {
    if (!isFinite(sek) || sek < 0) return "–:––";
    var m = Math.floor(sek / 60);
    var s = Math.floor(sek % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function h(tag, klasse, text) {
    var e = document.createElement(tag);
    if (klasse) e.className = klasse;
    if (text != null) e.textContent = text;
    return e;
  }

  function zahl(nr) { return String(parseInt(nr, 10) || nr); }

  /* Bilder eines Kapitels, egal ob als `bilder` oder als einzelnes `bild` */
  function bilderVon(k) {
    if (Array.isArray(k.bilder) && k.bilder.length) {
      return k.bilder.filter(function (b) { return b && b.datei; }).map(function (b) {
        return { datei: b.datei, unterschrift: b.unterschrift || "", alt: b.alt || "" };
      });
    }
    if (k.bild) return [{ datei: k.bild, unterschrift: k.bildunterschrift || "", alt: "" }];
    return [];
  }

  function ladeBild(pfad) {
    return new Promise(function (fertig) {
      var b = new Image();
      b.onload = function () { fertig(true); };
      b.onerror = function () { fertig(false); };
      b.src = pfad;
    });
  }


  /* ---------- Ruhezeit ---------- */

  function ruheNeuStarten() {
    clearTimeout(ruheUhr);
    if (!(RUHE_SEK > 0)) return;
    ruheUhr = setTimeout(function () {
      if (!audio.paused) { ruheNeuStarten(); return; }   // wer zuhört, wird nicht unterbrochen
      if (location.hash && location.hash !== "#/") location.hash = "#/";
    }, RUHE_SEK * 1000);
  }
  ["pointerdown", "keydown", "touchstart"].forEach(function (ev) {
    document.addEventListener(ev, ruheNeuStarten, { passive: true });
  });


  /* ---------- Übersicht ---------- */

  function zeigeUebersicht() {
    document.title = E.stationstitel + " – " + E.ausstellung;

    var teil = document.createDocumentFragment();
    teil.appendChild(h("h1", "seitentitel", E.stationstitel));
    if (E.anleitung) teil.appendChild(h("p", "anleitung", E.anleitung));

    var liste = h("ul", "kacheln");
    var dauerFelder = [];

    LISTE.forEach(function (k) {
      var li = h("li");
      var a = h("a", "kachel");
      a.href = "#/k/" + k.nr;

      var bilder = bilderVon(k);
      if (bilder.length) {
        var rahmen = h("span", "kachel-bild");
        var img = document.createElement("img");
        img.alt = "";
        img.loading = "lazy";
        img.decoding = "async";
        img.onerror = function () { rahmen.remove(); };
        img.src = bilder[0].datei;
        rahmen.appendChild(img);
        a.appendChild(rahmen);
      }

      var koerper = h("span", "kachel-koerper");
      var nr = h("span", "kachel-nr", zahl(k.nr));
      nr.setAttribute("aria-hidden", "true");
      var titel = h("span", "kachel-titel");
      titel.appendChild(h("span", "nur-lesen", "Kapitel " + zahl(k.nr) + ": "));
      titel.appendChild(document.createTextNode(k.titel));
      var fuss = h("span", "kachel-fuss", dauern[k.nr] ? zeit(dauern[k.nr]) + " Min." : "Anhören");
      fuss.dataset.nr = k.nr;
      dauerFelder.push(fuss);

      koerper.appendChild(nr);
      koerper.appendChild(titel);
      koerper.appendChild(fuss);
      a.appendChild(koerper);
      li.appendChild(a);
      liste.appendChild(li);
    });

    teil.appendChild(liste);
    if (E.quellen) teil.appendChild(h("p", "quellen", E.quellen));
    haupt.textContent = "";
    haupt.className = "";
    haupt.appendChild(teil);
    laengenNachtragen(dauerFelder);
  }

  /* Liest die Spieldauer aus den Dateien nach und trägt sie in die Kacheln ein. */
  function laengenNachtragen(felder) {
    LISTE.forEach(function (k, i) {
      if (dauern[k.nr]) return;
      var a = new Audio();
      a.preload = "metadata";
      a.addEventListener("loadedmetadata", function () {
        if (!isFinite(a.duration)) return;
        dauern[k.nr] = a.duration;
        if (felder[i] && felder[i].isConnected) felder[i].textContent = zeit(a.duration) + " Min.";
      });
      a.src = audioPfad(k);
    });
  }


  /* ---------- Kapitelseite ---------- */

  function zeigeKapitel(index) {
    var k = LISTE[index];
    aktuellerIndex = index;
    document.title = k.titel + " – " + E.stationstitel + " – " + E.ausstellung;

    var artikel = h("article", "kapitel");

    var zurueck = h("a", "zurueck", "← Alle Kapitel");
    zurueck.href = "#/";
    artikel.appendChild(zurueck);

    var kopf = h("header", "kapitel-kopf");
    kopf.appendChild(h("p", "kapitel-nr", "Kapitel " + zahl(k.nr)));
    kopf.appendChild(h("h1", "kapitel-titel", k.titel));
    artikel.appendChild(kopf);

    var gitter = h("div", "kapitel-gitter");

    var spieler = baueSpieler(k);
    spieler.classList.add("g-player");
    gitter.appendChild(spieler);

    var galerieZiel = h("div", "g-galerie");
    galerieZiel.hidden = true;
    gitter.appendChild(galerieZiel);

    var textSpalte = h("div", "g-text");
    if (k.text) textSpalte.appendChild(h("p", "zusammenfassung", k.text));
    if (k.transkript && k.transkript.trim()) {
      var det = h("details", "mitlesen");
      det.appendChild(h("summary", null, "Text mitlesen"));
      var tr = h("div", "transkript");
      k.transkript.trim().split(/\n\s*\n/).forEach(function (absatz) {
        tr.appendChild(h("p", null, absatz.trim()));
      });
      det.appendChild(tr);
      textSpalte.appendChild(det);
    }
    gitter.appendChild(textSpalte);
    artikel.appendChild(gitter);

    /* Vor und zurück zwischen Kapiteln */
    var nav = h("nav", "weiter");
    nav.setAttribute("aria-label", "Andere Kapitel");
    if (index > 0) nav.appendChild(kapitelLink(LISTE[index - 1], "← Voriges Kapitel", "zurueck-link"));
    if (index < LISTE.length - 1) {
      var vor = kapitelLink(LISTE[index + 1], "Nächstes Kapitel →", "vor-link");
      vor.classList.add("vor");
      nav.appendChild(vor);
    }
    artikel.appendChild(nav);

    haupt.textContent = "";
    haupt.className = "";
    haupt.appendChild(artikel);

    /* Galerie: erst prüfen, welche Bilddateien tatsächlich da sind */
    var bilder = bilderVon(k);
    galerieAktiv = null;
    if (!bilder.length) {
      artikel.classList.add("ohne-bild");
    } else {
      Promise.all(bilder.map(function (b) { return ladeBild(b.datei); })).then(function (ok) {
        if (aktuellerIndex !== index || !artikel.isConnected) return;   // inzwischen woanders
        var vorhanden = bilder.filter(function (_, i) { return ok[i]; });
        if (!vorhanden.length) { artikel.classList.add("ohne-bild"); return; }
        galerieZiel.hidden = false;
        baueGalerie(vorhanden, galerieZiel, k.titel);
      });
    }

    /* Audio laden und starten (der Browser darf das verweigern) */
    audio.src = audioPfad(k);
    audio.load();
    spieler.starten();
  }

  function kapitelLink(k, richtung, klasse) {
    var a = h("a", klasse);
    a.href = "#/k/" + k.nr;
    a.appendChild(h("span", "zu", richtung));
    a.appendChild(h("span", "weiter-titel", k.titel));
    return a;
  }


  /* ---------- Player ---------- */

  function baueSpieler(k) {
    var wrap = h("section", "spieler");
    wrap.setAttribute("aria-label", "Hörbeitrag");
    wrap.innerHTML =
      '<button type="button" class="play" aria-label="Abspielen">' +
        '<svg class="ic-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>' +
        '<svg class="ic-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4.5h4.2v15H6zM13.8 4.5H18v15h-4.2z"/></svg>' +
      '</button>' +
      '<div class="spur">' +
        '<div class="linie" id="linie" role="slider" tabindex="0" aria-label="Position im Hörbeitrag" ' +
             'aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-valuetext="0:00">' +
          '<span class="tinte"></span>' +
          '<span class="feder"><svg viewBox="0 0 20 36" aria-hidden="true">' +
            '<path class="korpus" d="M10 35 L2.5 15 Q1 7 6 1 L14 1 Q19 7 17.5 15 Z"/>' +
            '<path class="schlitz" d="M10 35 L10 18"/><circle class="loch" cx="10" cy="14" r="2.1"/>' +
          '</svg></span>' +
        '</div>' +
        '<div class="zeiten"><span class="zeit-jetzt">0:00</span><span class="zeit-gesamt">–:––</span></div>' +
      '</div>' +
      '<div class="sprungtasten">' +
        '<button type="button" class="zurueck15" aria-label="' + SPRUNG + ' Sekunden zurück">−' + SPRUNG + ' s</button>' +
        '<button type="button" class="vor15" aria-label="' + SPRUNG + ' Sekunden vor">+' + SPRUNG + ' s</button>' +
      '</div>';

    var play = wrap.querySelector(".play");
    var linie = wrap.querySelector(".linie");
    var tinte = wrap.querySelector(".tinte");
    var feder = wrap.querySelector(".feder");
    var jetzt = wrap.querySelector(".zeit-jetzt");
    var gesamt = wrap.querySelector(".zeit-gesamt");
    var tasten = wrap.querySelectorAll(".sprungtasten button");

    function anzeigen() {
      var d = audio.duration, t = audio.currentTime || 0;
      var p = isFinite(d) && d > 0 ? Math.min(100, (t / d) * 100) : 0;
      tinte.style.width = p + "%";
      feder.style.left = p + "%";
      jetzt.textContent = zeit(t);
      gesamt.textContent = zeit(d);
      linie.setAttribute("aria-valuenow", String(Math.round(p)));
      linie.setAttribute("aria-valuetext", zeit(t) + " von " + zeit(d));
    }

    function laeuftAnzeigen() {
      var l = !audio.paused;
      wrap.classList.toggle("laeuft", l);
      play.setAttribute("aria-label", l ? "Pause" : "Abspielen");
    }

    function springe(sek) {
      if (!isFinite(audio.duration)) return;
      audio.currentTime = Math.max(0, Math.min(audio.duration, sek));
      anzeigen();
    }

    audio.onloadedmetadata = function () {
      dauern[k.nr] = audio.duration;
      anzeigen();
    };
    audio.ontimeupdate = anzeigen;
    audio.onplay = laeuftAnzeigen;
    audio.onpause = laeuftAnzeigen;
    audio.onended = function () { laeuftAnzeigen(); anzeigen(); };
    audio.onerror = function () {
      play.disabled = true;
      tasten.forEach(function (t) { t.disabled = true; });
      linie.setAttribute("aria-disabled", "true");
      if (!wrap.querySelector(".spieler-hinweis")) {
        wrap.appendChild(h("p", "spieler-hinweis", "Die Audiodatei für dieses Kapitel ist noch nicht eingespielt."));
      }
    };

    play.addEventListener("click", function () {
      if (audio.paused) audio.play().catch(laeuftAnzeigen); else audio.pause();
    });
    wrap.querySelector(".zurueck15").addEventListener("click", function () { springe(audio.currentTime - SPRUNG); });
    wrap.querySelector(".vor15").addEventListener("click", function () { springe(audio.currentTime + SPRUNG); });

    /* Ziehen und Tippen auf der Linie */
    var zieht = false;
    function ausPosition(x) {
      var r = linie.getBoundingClientRect();
      var a = Math.max(0, Math.min(1, (x - r.left) / r.width));
      if (isFinite(audio.duration)) springe(a * audio.duration);
    }
    linie.addEventListener("pointerdown", function (e) {
      zieht = true;
      try { linie.setPointerCapture(e.pointerId); } catch (_) {}
      ausPosition(e.clientX);
    });
    linie.addEventListener("pointermove", function (e) { if (zieht) ausPosition(e.clientX); });
    ["pointerup", "pointercancel"].forEach(function (ev) {
      linie.addEventListener(ev, function () { zieht = false; });
    });
    linie.addEventListener("keydown", function (e) {
      var schritt = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5, PageUp: 30, PageDown: -30 }[e.key];
      if (schritt) { e.preventDefault(); springe(audio.currentTime + schritt); }
      else if (e.key === "Home") { e.preventDefault(); springe(0); }
      else if (e.key === "End")  { e.preventDefault(); springe(audio.duration); }
    });

    wrap.starten = function () {
      anzeigen();
      laeuftAnzeigen();
      /* Wenn der Browser das verweigert, bleibt die Play-Taste stehen. */
      audio.play().catch(function () { laeuftAnzeigen(); });
    };
    return wrap;
  }


  /* ---------- Galerie ---------- */

  function baueGalerie(bilder, ziel, kapitelTitel) {
    var n = bilder.length;
    var pos = 0;
    var lb = document.getElementById("lightbox");

    var sektion = h("section", "galerie");
    sektion.setAttribute("aria-roledescription", "Bildergalerie");
    sektion.setAttribute("aria-label", "Bilder zum Kapitel");

    var figur = h("figure", "galerie-bild");
    var knopf = h("button", "bild-knopf");
    knopf.type = "button";
    knopf.setAttribute("aria-label", "Bild in Großansicht öffnen");
    var bild = h("img", "hauptbild");
    bild.decoding = "async";
    knopf.appendChild(bild);
    var unterschrift = h("figcaption");
    figur.appendChild(knopf);
    figur.appendChild(unterschrift);
    sektion.appendChild(figur);

    var zaehler = h("span", "zaehler");
    zaehler.setAttribute("aria-live", "polite");
    var zurueck, weiter;
    var thumbs = [];

    if (n > 1) {
      var steuerung = h("div", "galerie-steuerung");
      zurueck = h("button", "rund", "‹");
      zurueck.type = "button";
      zurueck.setAttribute("aria-label", "Voriges Bild");
      weiter = h("button", "rund", "›");
      weiter.type = "button";
      weiter.setAttribute("aria-label", "Nächstes Bild");
      steuerung.appendChild(zurueck);
      steuerung.appendChild(zaehler);
      steuerung.appendChild(weiter);
      sektion.appendChild(steuerung);

      var leiste = h("ul", "miniaturen");
      bilder.forEach(function (b, i) {
        var li = h("li");
        var t = h("button");
        t.type = "button";
        t.setAttribute("aria-label", "Bild " + (i + 1) + " von " + n);
        var ti = document.createElement("img");
        ti.alt = "";
        ti.decoding = "async";
        ti.src = b.datei;
        t.appendChild(ti);
        t.addEventListener("click", function () { setze(i); });
        li.appendChild(t);
        leiste.appendChild(li);
        thumbs.push(t);
      });
      sektion.appendChild(leiste);

      zurueck.addEventListener("click", function () { setze(pos - 1); });
      weiter.addEventListener("click", function () { setze(pos + 1); });
    }

    function altText(b, i) {
      return b.alt || b.unterschrift || ("Bild " + (i + 1) + " zu „" + kapitelTitel + "“");
    }

    function setze(i) {
      if (i < 0 || i >= n) return;
      pos = i;
      var b = bilder[i];
      bild.src = b.datei;
      bild.alt = altText(b, i);
      unterschrift.textContent = b.unterschrift;
      unterschrift.hidden = !b.unterschrift;
      if (n > 1) {
        zaehler.textContent = "Bild " + (i + 1) + " von " + n;
        zurueck.disabled = i === 0;
        weiter.disabled = i === n - 1;
        thumbs.forEach(function (t, j) {
          if (j === i) t.setAttribute("aria-current", "true"); else t.removeAttribute("aria-current");
        });
        var aktiv = thumbs[i];
        if (aktiv && aktiv.parentNode && aktiv.parentNode.parentNode.scrollTo) {
          var leisteEl = aktiv.parentNode.parentNode;
          leisteEl.scrollTo({ left: aktiv.offsetLeft - leisteEl.clientWidth / 2 + aktiv.clientWidth / 2, behavior: "auto" });
        }
      }
      lightboxAktualisieren();
    }

    /* Pfeiltasten, wenn der Fokus in der Galerie liegt */
    sektion.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); setze(pos - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); setze(pos + 1); }
    });

    /* Wischen */
    var startX = null, startY = null;
    figur.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { startX = null; return; }
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    }, { passive: true });
    figur.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      startX = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) setze(pos + (dx < 0 ? 1 : -1));
    }, { passive: true });

    /* Großansicht */
    var lbBild = document.getElementById("lb-bild");
    var lbText = document.getElementById("lb-text");
    var lbZaehler = document.getElementById("lb-zaehler");
    var lbZurueck = document.getElementById("lb-zurueck");
    var lbWeiter = document.getElementById("lb-weiter");

    function lightboxAktualisieren() {
      if (!lb || !lb.open) return;
      var b = bilder[pos];
      lbBild.src = b.datei;
      lbBild.alt = altText(b, pos);
      lbText.textContent = b.unterschrift;
      lbText.hidden = !b.unterschrift;
      lbZaehler.textContent = n > 1 ? (pos + 1) + " von " + n : "";
      lbZurueck.hidden = lbWeiter.hidden = n < 2;
      lbZurueck.disabled = pos === 0;
      lbWeiter.disabled = pos === n - 1;
    }
    knopf.addEventListener("click", function () {
      if (!lb || typeof lb.showModal !== "function") return;
      lb.showModal();
      lightboxAktualisieren();
    });

    galerieAktiv = { anzahl: n, setze: setze, lbAktualisieren: lightboxAktualisieren, pos: function () { return pos; } };

    ziel.appendChild(sektion);
    setze(0);
  }

  /* Die Großansicht gibt es nur einmal im Dokument – ihre Knöpfe hängen hier */
  (function () {
    var lb = document.getElementById("lightbox");
    if (!lb) return;
    document.getElementById("lb-zu").addEventListener("click", function () { lb.close(); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });   // Klick neben das Bild
    document.getElementById("lb-zurueck").addEventListener("click", function () {
      if (galerieAktiv) galerieAktiv.setze(galerieAktiv.pos() - 1);
    });
    document.getElementById("lb-weiter").addEventListener("click", function () {
      if (galerieAktiv) galerieAktiv.setze(galerieAktiv.pos() + 1);
    });
    lb.addEventListener("keydown", function (e) {
      if (!galerieAktiv) return;
      if (e.key === "ArrowLeft")  { e.preventDefault(); galerieAktiv.setze(galerieAktiv.pos() - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); galerieAktiv.setze(galerieAktiv.pos() + 1); }
    });
  })();


  /* ---------- Navigation ---------- */

  function zeichnen() {
    var lb = document.getElementById("lightbox");
    if (lb && lb.open) lb.close();

    var treffer = /^#\/k\/([^/]+)$/.exec(location.hash);
    if (treffer) {
      var index = LISTE.findIndex(function (k) { return k.nr === treffer[1]; });
      if (index >= 0) { zeigeKapitel(index); nachNavigation(); return; }
    }
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
    aktuellerIndex = -1;
    galerieAktiv = null;
    zeigeUebersicht();
    nachNavigation();
    ruheNeuStarten();
  }

  function nachNavigation() {
    window.scrollTo(0, 0);
    if (!ersteAnzeige) haupt.focus({ preventScroll: true });   // Screenreader: Fokus auf neuen Inhalt
    ersteAnzeige = false;
  }

  window.addEventListener("hashchange", zeichnen);

  /* Leertaste hält an und startet wieder, solange keine Taste im Fokus ist */
  document.addEventListener("keydown", function (e) {
    if (e.key !== " ") return;
    var f = document.activeElement;
    if (f && (f.tagName === "BUTTON" || f.tagName === "SUMMARY" || f.id === "linie" || f.tagName === "A")) return;
    if (aktuellerIndex < 0) return;
    e.preventDefault();
    if (audio.paused) audio.play().catch(function () {}); else audio.pause();
  });


  /* ---------- Kopf und Fuß aus den Einstellungen ---------- */

  document.getElementById("kopf-titel").textContent = E.ausstellung;
  document.getElementById("kopf-unter").textContent = E.untertitel;
  document.getElementById("kopf-ort").textContent = E.ort;

  if (E.impressum || E.datenschutz) {
    var fuss = document.getElementById("fuss");
    [["Impressum", E.impressum], ["Datenschutz", E.datenschutz]].forEach(function (p) {
      if (!p[1]) return;
      var a = h("a", null, p[0]);
      a.href = p[1];
      fuss.appendChild(a);
    });
    fuss.hidden = false;
  }

  zeichnen();
})();

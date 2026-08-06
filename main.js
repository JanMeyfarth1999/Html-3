// Überschrift
const heute = new Date();
const datum = heute.toLocaleDateString("de-DE");
document.getElementById("main-headline").textContent =
    "Kalenderdatenblatt vom " + datum;

// <p>
//Wochentage
const wochentage = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
];
const wochentag = wochentage[heute.getDay()];
// Monate
const Monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];
const Monatsname = Monate[heute.getMonth()];
// Jahr
const Jahr = heute.getFullYear();
//Tag
const tag = heute.getDate();
// Der wievielte "Wochentag(Mo,Di....)" im Monat ?
const wiviwochentag = Math.ceil(tag / 7);
// angezeigter Text im Web
const Text =
    `Der ${datum} ist ein ${wochentag}, um genau zu sein der ${wiviwochentag}. ${wochentag} im Monat ${Monatsname} des Jahres ${Jahr}.`;
document.getElementById("Tagesinfo").textContent = Text;

//h2
const tagMonat = heute.toLocaleDateString(
    "de-DE",
    {
        day: "2-digit",
        month: "2-digit"
    }
);
document.getElementById("headline2").textContent =
    "Historische Ereignisse am " + tagMonat;



// ===== Dynamischer Kalender =====
const kalenderBody = document.getElementById("kalender-body");
kalenderBody.innerHTML = "";
const jahr = heute.getFullYear();
const monat = heute.getMonth();
const tageImMonat =
    new Date(jahr, monat + 1, 0).getDate();
const ersterTag =
    new Date(jahr, monat, 1).getDay();
// Montag = erster Tag der Woche
const startTag =
    ersterTag === 0 ? 6 : ersterTag - 1;
let zeile = document.createElement("tr");
// Leere Felder vor Monatsbeginn
for (let i = 0; i < startTag; i++) {
    const leereZelle =
        document.createElement("td");
    zeile.appendChild(leereZelle);
}

// Alle Tage des Monats erzeugen
for (let tag = 1; tag <= tageImMonat; tag++) {
    const zelle =
        document.createElement("td");
    zelle.textContent = tag;
    // Dynamische Feiertage
    const monatText =
        String(monat + 1).padStart(2, "0");
    const tagText =
        String(tag).padStart(2, "0");
    const aktuellesDatum = `${jahr}-${monatText}-${tagText}`;
    const feiertageHessen = [
        "2026-10-03",
        "2026-12-25",
        "2026-12-26",
        // 2027
        "2027-01-01",
        "2027-03-26",
        "2027-03-29",
        "2027-05-01",
        "2027-05-06",
        "2027-05-17",
        "2027-05-27",
        "2027-10-03",
        "2027-12-25",
        "2027-12-26",
        // 2028
        "2028-01-01",
        "2028-04-14",
        "2028-04-17",
        "2028-05-01",
        "2028-05-25",
        "2028-06-05",
        "2028-06-15",
        "2028-10-03",
        "2028-12-25",
        "2028-12-26"
    ];
    if (feiertageHessen.includes(aktuellesDatum)) {
        zelle.classList.add("feiertag");
    }
    // Heutigen Tag markieren
    if (tag === heute.getDate()) {
        zelle.classList.add("heute");
    }
    // Samstag blau
    if (zeile.children.length === 5) {
        zelle.classList.add("samstag");
    }
    // Sonntag rot
    if (zeile.children.length === 6) {
        zelle.classList.add("sonntag");
    }
    zeile.appendChild(zelle);
    // Nach 7 Tagen neue Woche beginnen
    if (zeile.children.length === 7) {
        kalenderBody.appendChild(zeile);
        zeile = document.createElement("tr");
    }
}
    // Leere Felder nach Monatsende
    if (zeile.children.length > 0) {

        while (zeile.children.length < 7) {
            const leereZelle = document.createElement("td");
   //Samstag
    if (zeile.children.length === 5) {
        leereZelle.classList.add("samstag");
    }
    //Sonntag
    if(zeile.children.length === 6) {
        leereZelle.classList.add("sonntag")
    }
    zeile.appendChild(leereZelle); 
}       
    kalenderBody.appendChild(zeile);

}
    
        
  










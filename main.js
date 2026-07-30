// Überschrift
const heute = new Date();
const datum = heute.toLocaleDateString("de-DE");
 document.getElementById("main-headline").textContent =
"Tagesbericht vom " + datum;

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

//Tabelle
const kalenderBody = document.getElementById("kalender-body");
kalenderBody.innerHTML = "";
const jahr = heute.getFullYear();
const monat = heute.getMonth();
const tageImMonat = new Date(    
    jahr,   
    monat + 1,
    0    
).getDate();
const ersterTag = new Date(
    jahr,   
    monat,    
    1
).getDay();
// Sonntag = 0 → Montag = 0
const startTag =    
ersterTag === 0 ? 6 : ersterTag - 1;
let zeile = document.createElement("tr");
// Leere Felder vor dem Monatsanfang
for (let i = 0; i < startTag; i++) {
    const leereZelle =       
        document.createElement("td");
zeile.appendChild(leereZelle);

// Tage erzeugen38for (let tag = 1; tag <= tageImMonat; tag++) {39 40    const zelle =41        document.createElement("td");42 43    zelle.textContent = tag;44 45    // Heutigen Tag markieren46    if (47        tag === heute.getDate()48    ) {49        zelle.classList.add("heute");50    }51 52    zeile.appendChild(zelle);53 54    // Neue Zeile nach Sonntag55    if (56        (startTag + tag) % 7 === 057    ) {58        kalenderBody.appendChild(zeile);59 60        zeile =61            document.createElement("tr");62    }63}64 65// Letzte Zeile anhängen66if (zeile.children.length > 0) {67    kalenderBody.appendChild(zeile);68}

            





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
const tage = document.querySelectorAll("#kalender td");
tage.forEach(function(zelle) {
    

    if (Number(zelle.textContent) ===Tag) {
        zelle.classList.add("heute");


    }


    });




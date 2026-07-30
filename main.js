// Überschrift
const heute = new Date();
const datum = heute.toLocaleDateString("de-DE");
 document.getElementById("ueberschrift").textContent =
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
const wochtag = wochentage[heute.getDay()];
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
const 






// Hauptübeschrift 
let headline = document.getElementById("main-headline");
headline.textContent = "Kalender Datenblatt zum 21.07.2026";


// Info zum aktuellen Tag
let info = document.getElementById("info");
info.textContent = "Der 21.07.2026 ist ein Dienstag, es ist nicht so warm wie die letzten Tage und es sind auch den rest der Woche keine hohen Temperaturen mehr zu erwarten.";


// Dynamischer Kalender
// dm und dj sind Monat und Jahr, die im Kalender dargestellt werden
// insbesondere könnte auch ein Monat gewählt werden, in dem das aktuelle Datum nicht vorkommt
const date = new Date();
const dm = d.get.Month() + 1;
const dj = d.get.Year() + 1900;
Kalender(dm ,dj, kalender);
function Kalender (Monat, Jahr, KalenderId) {
    const Monatsnahme = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Julie", "August", "September", "Oktober", "November", "Dezember");
    const Tag = new Array("Mo", "Di", "Mi", "Do", "Fr", "Sa", "So");
//aktuelles Datum für die spätere Hervorhebung ermitteln
const jetzt = new Date();
let DieserTag = -1;
if((jetzt.getFullYear() == Jahr) && (jetzt.getMonth() +1 == Monat))
DieserTag = jetzt.getDate();
// ermittle Wochentag des ersten Tags im Monat halte diese Information in Start fest
// getDay liefert 0..6 für So..Sa. Wir möchten aber Mo=0 bis So=6, darum +6 und mod 7.
const Zeit = new Date(Jahr, Monat - 1, 1);
const Start = (Zeit.getDay() +6) %7;




}


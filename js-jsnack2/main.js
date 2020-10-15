// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo due stringhe all'utente
var stringa1 = prompt('Inserisci una stringa');
var stringa2 = prompt('Inserisci una stringa');

console.log('stringa 1 = ' + stringa1);
console.log('stringa 2 = ' + stringa2);

// calcolo la lunghezza delle 2 stringhe
var lunghezza1 = stringa1.length;
var lunghezza2 = stringa2.length;

console.log('lunghezza 1 = ' + lunghezza1);
console.log('lunghezza 2 = ' + lunghezza2);

// soluzione A
if(lunghezza1 > lunghezza2) {
    // la parola 1 è più lunga
    console.log(stringa2);
    console.log(stringa1);
} else if (lunghezza2 > lunghezza1) {
    // la parola 2 è più lunga
    console.log(stringa1);
    console.log(stringa2);
} else {
    // sono uguali
    console.log('sono uguali');
}

// soluzione B
// if(lunghezza1 > lunghezza2) {
//     // la parola 1 è più lunga
//     console.log(stringa2);
//     console.log(stringa1);
// } else {
//     // la parola 2 è più lunga oppure sono uguali => stampo sempre prima la parola 1
//     console.log(stringa1);
//     console.log(stringa2);
// }

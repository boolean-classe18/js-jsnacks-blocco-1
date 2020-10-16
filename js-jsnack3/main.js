// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.



var numero_utente;
// predispongo una variabile per memorizzare tutti i numeri inseriti dall'utente
var tutti_numeri = [];

for (var i = 0; i < 5; i++) {
    // chiedo 5 numeri all'utente => ripeto per 5 volte un prompt
    numero_utente = parseInt(prompt('Inserisci un numero'));
    // console.log(numero_utente);
    // inserisco il numero digitato dall'utente nell'array
    tutti_numeri.push(numero_utente);
    // console.log(tutti_numeri);
}
// alla fine del ciclo ho un array completo con tutti i numeri inseriti dall'utente
console.log(tutti_numeri);

// sommo tutti i numeri inseriti nell'array
// predispongo una variabile per accumulare la somma dei numeri
var somma = 0;
for (var i = 0; i < tutti_numeri.length; i++) {
    // leggo tutti i numeri uno alla volta
    var numero_corrente = tutti_numeri[i];
    console.log('numero in posizione i = ' + i + ': '+ numero_corrente);
    // accumulo la somma dei numeri letti finora
    somma = numero_corrente + somma;
    console.log(somma);
}

console.log('La somma totale è: ' + somma);

// soluzione B
// var somma = 0;
// // ripeto per 5 volte
// for (var i = 0; i < 5; i++) {
//     // chiedo un numero all'utente
//     var numero_utente = parseInt(prompt('Inserisci un numero'));
//     // sommo direttamente il numero appena inserito alla somma dei numeri letti finora
//     if(!isNaN(numero_utente)) {
//         somma = somma + numero_utente;
//     }
// }
//
// console.log(somma);

// Calcola la somma e la media dei numeri compresi in un intervallo definito dall'utente

// chiedo all'utente il numero minimo
// e controllo che sia un numero valido

// con ciclo do-while:
var numero_minimo;
do {
    numero_minimo = parseInt(prompt('inserisci limite minimo'));
    if(isNaN(numero_minimo)) {
        alert('input non corretto');
    }
} while (isNaN(numero_minimo));

// con ciclo while:
// var numero_minimo = parseInt(prompt('inserisci limite minimo'));
// while(isNaN(numero_minimo)) {
//     alert('input non corretto');
//     numero_minimo = parseInt(prompt('inserisci limite minimo'));
// }


// chiedo all'utente il numero massimo
// e controllo che sia un numero valido e che sia superiore al numero minimo
var numero_massimo;
do {
    numero_massimo = parseInt(prompt('inserisci limite massimo'));
    if(isNaN(numero_massimo) || numero_massimo <= numero_minimo) {
        alert('input non corretto');
    }
} while (isNaN(numero_massimo) || numero_massimo <= numero_minimo);


// calcolo la somma dei numeri da numero_minimo a numero_massimo
var somma = 0;
// scorro tutti i numeri da numero_minimo a numero_massimo compreso
for (var i = numero_minimo; i <= numero_massimo; i++) {
    // accumulo la somma dei numeri visti finora
    somma += i; // equivalente a: somma = somma + i;
}

// alla fine del ciclo ho la somma di tutti i numeri da numero_minimo a numero_massimo
console.log('La somma dei numeri compresi tra ' + numero_minimo + ' e ' + numero_massimo + ' vale ' + somma);
//
// calcolo la media dei numeri da numero_minimo a numero_massimo
var media = somma / (numero_massimo - numero_minimo + 1);
console.log('La media dei numeri compresi tra ' + numero_minimo + ' e ' + numero_massimo + ' vale ' + media);

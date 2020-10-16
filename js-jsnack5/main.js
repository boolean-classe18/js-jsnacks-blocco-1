// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

// chiedo un numero all'utente
var numero_utente = parseInt(prompt('Inserisci un numero'));
console.log('numero utente = ' + numero_utente);

// devo partire da 1 e arrivare a N (numero_utente)
for (var i = 1; i <= numero_utente; i++) {
    console.log('i = ' + i);
    // calcolo la potenza di i alla terza (dove i va da 1 a numero_utente)
    var potenza_cubo = Math.pow(i, 3);
    // var potenza_cubo = i * i * i;
    console.log(i + ' alla 3a = ' + potenza_cubo);
}

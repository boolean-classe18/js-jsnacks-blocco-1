// Calcola la somma e la media dei numeri da 1 a 10.

// calcolo la somma dei numeri da 1 a 10
var somma = 0;
// scorro tutti i numeri da 1 a 10 compreso
for (var i = 1; i <= 10; i++) {
    // accumulo la somma dei numeri visti finora
    somma += i; // equivalente a: somma = somma + i;
}

// alla fine del ciclo ho la somma di tutti i numeri da 1 a 10
console.log('somma = ' + somma);

// calcolo la media dei numeri da 1 a 10
var media = somma / 10;
console.log('media = ' + media);

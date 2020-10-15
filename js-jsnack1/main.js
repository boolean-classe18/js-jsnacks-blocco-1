// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// chiedo 2 numeri all'utente
var numero1 = parseInt(prompt('Inserisci il primo numero'));
var numero2 = parseInt(prompt('Inserisci il secondo numero'));

console.log('numero 1 = ' + numero1);
console.log('numero 2 = ' + numero2);

// controllo che i valori inseriti in input siano dei numeri validi
if(!isNaN(numero1) && !isNaN(numero2)) {
    if(numero1 > numero2) {
        // numero1 è il maggiore => lo stampo
        console.log('il numero maggiore è ' + numero1);
    } else if(numero2 > numero1) {
        // numero2 è il maggiore => lo stampo
        console.log('il numero maggiore è ' + numero2);
    } else {
        // se arrivo a questo else significa che i numeri sono uguali!
        console.log('sono uguali!');
    }
} else {
    console.log('non hai inserito dei numeri validi');
}

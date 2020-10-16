// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// creo un array che conterrà i numeri dispari
var numeri_dispari = [];

// ripeto 6 volte
for (var i = 0; i < 6; i++) {
    // chiedo un numero all'utente
    var numero = parseInt(prompt('Inserisci un numero'));
    console.log('numero inserito = ' + numero);
    // verifico che l'utente abbia inserito un numero valido
    if(!isNaN(numero)) {
        // verifico se il numero inserito dall'utente è un numero dispari
        // un numero è dispari quando diviso per 2 dà resto diverso da 0
        var resto = numero % 2;
        console.log('resto della divisione per 2 = ' + resto);
        if(resto != 0) {
            // il numero è dispari
            // in caso positivo, lo inserisco nell'array
            numeri_dispari.push(numero);
        } else {
            // in caso negativo, lo scarto (non faccio nulla)
        }
    } else {
        alert('non hai inserito un numero valido');
    }
}

console.log(numeri_dispari);

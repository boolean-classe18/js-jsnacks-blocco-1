// Stampa le potenze di 2 senza superare il numero 1000
// 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512

// soluzione base con ciclo for e limite su esponente
console.log('ciclo for 1');
for (var i = 0; i < 10; i++) {
    console.log(Math.pow(2, i));
}



// soluzione base con ciclo for e limite su potenza
console.log('ciclo for 2');
for (var i = 0; Math.pow(2, i) < 1000; i++) {
    console.log(Math.pow(2, i));
}



// soluzione con variabili parametrizzate e ciclo for
console.log('cico for 3');
var base = 2;
var esponente = 1;
var potenza = 1;
var limite = 1000;

for (var i = 1; potenza < limite; i++) {
    console.log(potenza);
    potenza = Math.pow(base, i);
}



// soluzione con variabili parametrizzate e ciclo while
console.log('ciclo while');
var base = 2;
var esponente = 1;
var potenza = 1;
var limite = 1000;

while(potenza < limite) {
    console.log(potenza);
    potenza = Math.pow(base, esponente);
    esponente++;
}



// soluzione "furba" con ciclo for
console.log('ciclo for 4');
for (var i = 1; i < limite; i = i * base) {
    console.log(i);
}

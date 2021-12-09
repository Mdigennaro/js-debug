/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

/*
// ESERCIZIO 1 

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* 
Questo codice serve per fare un ciclo da 0 a 5 
Errore:
1.Bisognava invertite il > in < a riga 15
*/
/*
// ESERCIZIO 2
const num = 4;

function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(num));

/*
Questo codice serve a sommare 5 a tutti i numeri divisibili a 2
Errori:
1. Manca la costante Num 
2. Manca un uguale nella condizione a riga 24
*/
/*
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

console.log(loopToFive());

/*
Questo codice serve per creare un loop fino a cinque 
Errore:
1. Bisogna invertire le virgole a riga 45 in ;
2. Aggiungere l ' uguale dopo il minore a riga 45
*/

/*
// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 1; i < numbers.length 
        + 1; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers());
/*
Questo codice serve a mettere in numeri pari di un array dentro un altro array.

Errori:
1. Invertire let con const a riga 40
2. Invertire a +1 in numbers.length a riga 42
3. Cancellare il ; dopo l'incremento a riga 42
4. Cambiare il nome dell 'array numbers con la 'i' a riga 
5. Aggiungere un altro = nella condizione di if a riga 43
6. Eliminare il ; nella condizione
7. Spostare il return fuori dal ciclo for
8. Nel ciclo for la variabile i deve essere ugale a 1 per non far restituire 0
*/
/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

/*
// ESERCIZIO 1 

for (let i = 0; i > 5; i++) {
    console.log(i);
}

/* 
Il ciclo non parte per I è minore di 6*/
/*
// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
/*
Questo codice serve a sommare 5 a tutti i numeri divisibili a 2
Errori:
1. Manca la costante Num 
2. Manca un uguale nella condizione a riga 24
*/
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
/*
// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
/*
Questo codice serve a mettere in numeri pari di un array dentro un altro array.

Errori:
1. Invertire let con const a riga 40
2. Invertire a +1 in numbers.length a riga 42
3. Cancellare il ; dopo l'incremento a riga 42
4. Cambiare il nome dell 'array numbers con la 'i' a riga 
5. Aggiungere un altro = nella condizione di if a riga 43
6. Eliminare il ; a riga 43
7. Spostare il return a riga 46 fuori dal ciclo for

*/
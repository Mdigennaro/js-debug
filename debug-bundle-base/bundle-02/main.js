/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

/*
// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
       return message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        return message = 'Hai più di 18 anni!';
    }
}
checkAge();

/*
Questo codice serve per verificare se l' età e maggiore o minore di 18 anni
Errori:
1. Bisogna cambiare la costante message in variabile let a riga 16
2. Manca il return a message a riga 19 e 21
*/
/*
// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*
Questo codice serve per contare il numero di colori presente nell 'array
Errore:
1. A riga 36 è scritta male la parola length
*/
/*
// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero')) ;
    const total = userNumber + 12;
    
    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/*
Questa funzione serve per sommare 12 al numero inserito dall'utente
Errore:
1. Nella costante userNumber a riga 48 il prompt deve essere inserito nella funzione parseInt
*/
/*
// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');
    
    let grantAccess = false;
    
    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }
    
    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*
Questo codice serve per verificare la mail inserita dall'utente puo accedere
Errore:
1. La variabile booleana viene inserita come stringa e non come variabile sia a riga 66 e sia a riga 69
*/

/*
// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    
    const userEmail = prompt('Inserisci il tuo indirizzo email');
    
    let grantAccess = false;
    
    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
        
        if (userEmail.length > 5) {
            
            if (email === userEmail) {
                grantAccess = true;            
                
            }
            
        }
        
        if (grantAccess === true) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
checkAccessImproved();

/*
Questo codice serve per verifica se la mail inserita dall utente e compresa in quelle salvate nell 'array
Errore:
1. Mancava la chiusura della graffa alla funzione
*/






























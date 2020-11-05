// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// IMPOSTO LE VARIABILI
var COUNT_NUMBER = 5;
var RANDOM_MIN = 1;
var RANDOM_MAX = 10;

// FUNZIONE PER VERIFICARE SE UN NUMERO E' IN UN ARRAY
function isNumberInArray(num, numArray) {
    for (var i = 0; i < numArray.length; i++) {
        if (num === numArray[i]) {
            return true;
        }
    }
    return false;
}

// FUNZIONE PER GENERARE UN NUMERO RANDOM
function numeroRandom(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// GENERO DEI NUMERI RANDOM CON ALERT, SENZA NUMERI DOPPIONI
var arrayRandomNumbers = [];
while (arrayRandomNumbers.length < COUNT_NUMBER) {
    var randomNumbers = numeroRandom(RANDOM_MIN, RANDOM_MAX);
    if (!isNumberInArray(randomNumbers, arrayRandomNumbers)) {
        arrayRandomNumbers.push(randomNumbers);
        alert(randomNumbers);
    }
}
console.log("arrayRandomNumbers", arrayRandomNumbers);

// IMPOSTO UN TIMER DOPO IL QUALE SI ATTIVERA' UNA FUNZIONE
var arrayUserNumbers = [];
setTimeout(timer, 1000);
function timer() {
    // GENERO DEI PROMPT CON CUI L'UTENTE PUO' INSERIRE DEI NUMERI
    // DA CONFRONTARE CON I NUMERI CASUALI, NON CI SONO DOPPIONI
    for (var i = 0; i < arrayRandomNumbers.length; i++) {
        var userNumbers = parseInt(prompt("Inserisci un numero:"));
        if (isNumberInArray(userNumbers, arrayRandomNumbers) && !isNumberInArray(userNumbers, arrayUserNumbers)) {
            arrayUserNumbers.push(userNumbers);
            // STAMPO IL RISULTATO DEI NUMERI INDOVINATI
            document.getElementById("risultato").innerHTML = "Hai indovinato " + arrayUserNumbers.length + " numero/i: " + arrayUserNumbers;
            console.log("arrayUserNumbers", arrayUserNumbers);
        }
        else if (arrayUserNumbers.length == 0){
            document.getElementById("risultato").innerHTML = "Non hai indovinato nessun numero";
        }
    }
}

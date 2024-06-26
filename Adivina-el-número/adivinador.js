// Genera un número aleatorio entre 1 y 100
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

// El jugador tiene 10 intentos para adivinar el número
var intentos = 10;

while(intentos > 0) {
    var numeroJugador = prompt("Adivina el número entre 1 y 100");

    if(numeroJugador == numeroSecreto) {
        alert("¡Has adivinado el número!");
        break;
    } else if(numeroJugador < numeroSecreto) {
        alert("El número secreto es mayor. Te quedan " + --intentos + " intentos.");
    } else if(numeroJugador > numeroSecreto) {
        alert("El número secreto es menor. Te quedan " + --intentos + " intentos.");
    }
}

if(intentos == 0) {
    alert("Has perdido. El número secreto era " + numeroSecreto);
}
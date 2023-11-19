// Inicializamos Tippy.js para mostrar tooltips
tippy('.custom-image', {
    placement: 'bottom',
    animation: 'scale',
    arrow: true
});

// Inicializamos el marcador
var playerWins = 0;
var computerWins = 0;

// Función para jugar
function play(userChoice) {
    var choices = ["piedra", "papel", "lagarto", "tijera", "spock"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Comprobamos el resultado del juego
    if (userChoice == computerChoice) {
        displayResult("¡Es un empate!", "info");
    } else if (
        (userChoice == "piedra" && (computerChoice == "tijera" || computerChoice == "lagarto")) ||
        (userChoice == "papel" && (computerChoice == "piedra" || computerChoice == "spock")) ||
        (userChoice == "lagarto" && (computerChoice == "papel" || computerChoice == "spock")) ||
        (userChoice == "tijera" && (computerChoice == "papel" || computerChoice == "lagarto")) ||
        (userChoice == "spock" && (computerChoice == "piedra" || computerChoice == "tijera"))
    ) {
        displayResult("¡Ganaste!", "success");
        playerWins++;
    } else {
        displayResult("¡Perdiste!", "error");
        computerWins++;
    }

    // Actualizamos el marcador
    updateScore();
}

// Función para mostrar el resultado con SweetAlert2
function displayResult(message, icon) {
    Swal.fire({
        title: `<i class="result-icon fas fa-${icon}"></i>`,
        html: `<p>${message}</p>`,
        icon: null,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Volver a jugar'
    });
}

// Función para actualizar el marcador
function updateScore() {
    document.getElementById("playerScore").innerText = playerWins;
    document.getElementById("computerScore").innerText = computerWins;
}

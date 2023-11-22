
// Inicializamos el marcador
var playerWins = 0;
var computerWins = 0;

// Función para mostrar el resultado con SweetAlert2
function displayResult(message, icon, computerChoice, playerChoice) {

    Swal.fire({
        title: `<i class="result-icon fas fa-${icon}"></i>`,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            `
        },
        html: `<p>${message}</p>
        <p>PC escogió: ${computerChoice}</p>
        <p>Tú escogiste: ${playerChoice}</p>
        <img src="${getImageUrl(computerChoice, playerChoice)}" alt="Result Image" width="300">`,
        icon: null,
        
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
    });



    Swal.fire({
        title: `<i class="result-icon fas fa-${icon}"></i>`,
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
            custom-align-top-center
            `
        },
        html: `<p>${message}</p>
        <p>PC escogió: ${computerChoice}</p>
        <p>Tú escogiste: ${playerChoice}</p>
        <img class="result-image" src="${getImageUrl(computerChoice, playerChoice)}" alt="Result Image">`,
        icon: null,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
            `
        }
    });
    
    
}

// Función para obtener la URL de la imagen correspondiente a la elección
function getImageUrl(computerChoice, playerChoice) {
    // Define las URL de las imágenes para cada combinación
        const imageUrls = {
        //piedra
        "piedra_piedra": "imagenes/empate.gif",
        "piedra_papel": "imagenes/papel_piedra.gif",
        "piedra_tijera": "imagenes/piedra_tijera.gif",
        "piedra_lagarto": "imagenes/piedra_lagarto.gif",
        "piedra_spok": "imagenes/spok_piedra.gif",
        //papel
        "papel_piedra": "imagenes/papel_piedra.gif",
        "papel_papel": "imagenes/empate.gif",
        "papel_tijera": "imagenes/tijera_papel.gif",
        "papel_lagarto": "imagenes/lagarto_papel.gif",
        "papel_spok": "imagenes/papel_spok.gif",
        //lagarto
        "lagarto_piedra": "imagenes/piedra_lagarto.gif",
        "lagarto_papel": "imagenes/lagarto_papel.gif",
        "lagarto_tijera": "url_imagen_lagarto_tijera",
        "lagarto_lagarto": "imagenes/empate.gif",
        "lagarto_spok": "imagenes/lagarto_spok.gif",
        //tijera
        "tijera_piedra": "imagenes/piedra_tijera.gif",
        "tijera_papel": "imagenes/tijera_papel.gif",
        "tijera_tijera": "imagenes/piedra_tijera.gif",
        "tijera_lagarto": "imagenes/lagarto_tijera.gif",
        "tijera_spok": "imagenes/spok_tijera.gif",
        //spok
        "spok_piedra": "imagenes/spok_piedra.gif",
        "spok_papel": "imagenes/papel_spok.gif",
        "spok_tijera": "imagenes/spok_tijera.gif",
        "spok_lagarto": "imagenes/lagarto_spok.gif",
        "spok_spok": "imagenes/empate.gif"

    };

    // Construye la clave para buscar en el objeto imageUrls
    const key = `${computerChoice.toLowerCase()}_${playerChoice.toLowerCase()}`;

    // Devuelve la URL de la imagen correspondiente o una imagen predeterminada si no se encuentra
    return imageUrls[key] || "imagenes/error.gif";
}

// Función para jugar
function play(userChoice) {
    var choices = ["piedra", "papel", "lagarto", "tijera", "spok"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Comprobamos el resultado del juego
    if (userChoice == computerChoice) {
        displayResult("¡Es un empate!", "null", computerChoice, userChoice);
    } else if (
        (userChoice == "piedra" && (computerChoice == "tijera" || computerChoice == "lagarto")) ||
        (userChoice == "papel" && (computerChoice == "piedra" || computerChoice == "spok")) ||
        (userChoice == "lagarto" && (computerChoice == "papel" || computerChoice == "spok")) ||
        (userChoice == "tijera" && (computerChoice == "papel" || computerChoice == "lagarto")) ||
        (userChoice == "spok" && (computerChoice == "piedra" || computerChoice == "tijera"))
    ) {
        displayResult("¡Ganaste!", "success", computerChoice, userChoice);
        playerWins++;
    } else {
        displayResult("¡Perdiste!", "error", computerChoice, userChoice);
        computerWins++;
    }

    // Actualizamos el marcador
    updateScore();
}

// Función para actualizar el marcador
function updateScore() {
    document.getElementById("playerScore").innerText = playerWins;
    document.getElementById("computerScore").innerText = computerWins;
}


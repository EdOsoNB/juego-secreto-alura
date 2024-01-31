let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.textContent = texto
}

function verificarIntento() {
    let numeroDeUsuario = Number(document.getElementById('valorUsuario').value)
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
        document.querySelector('#reiniciar').removeAttribute('disabled')
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++
        limpiarCaja()
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1
    // Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {
        // Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto')
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`)
    // Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto()
    // Inializar el número de intentos
    intentos = 1
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja()
    // Indicar mensaje de intervalo de números
    condicionesIniciales()
    // Deshabilitar botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales()
// Bandera de operaciones: se activa cada una según se realice su respectiva operación.
let banSumar = false;
let banRestar = false;
let banMultiplicar = false;
let banDividir = false;
let banPotencia = false;
let banRaizCuadrada = false;
let banRaizCubica = false;

// Bandera que se activa cuando se haga click en el botón = para indicar que hay un
// resultado final vigente.
let banResultado = false;

// Bandera que se activa cuando se hace una operación múltiple antes de darle al
// botón =
let banOperacionPrevia = false;

/**
 * Agregar un número al input números.
 * @param {string} n Cadena de texto que simboliza el número del id del botón en el DOM.
 */
function agregarNumero(n) {
    // Si hay un resultado final vigente, se limpia el input resultado para una
    // nueva operación.
    if (banResultado) { limpiarResultado(); }

    let num = document.getElementById("input__numero");
    num.value += n;
}

/**
 * Preparar la operación a realizar si no es una operación previa; y, si la es,
 * realizarla para después preparar la siguiente.
 * @param {string} op Cadena de texto que simboliza la operación del id del botón en el DOM.
 */
function operacion(op) {
    switch (op) {
        case "sumar":
            verificarOperacionPrevia();
            operacionBinaria("+");
            banSumar = true;
            banOperacionPrevia = false;
            break;
        
        case "restar":
            verificarOperacionPrevia();
            operacionBinaria("-");
            banRestar = true;
            banOperacionPrevia = false;
            break;
        
        case "multiplicar":
            verificarOperacionPrevia();
            operacionBinaria("*");
            banMultiplicar = true;
            banOperacionPrevia = false;
            break;
        
        case "dividir":
            verificarOperacionPrevia();
            operacionBinaria("/");
            banDividir = true;
            banOperacionPrevia = false;
            break;
        
        case "potenciar":
            verificarOperacionPrevia();
            operacionBinaria("^");
            banPotencia = true;
            banOperacionPrevia = false;
            break;
        
        case "raizcuadrada":
            verificarOperacionPrevia();
            operacionUnaria("2√");
            banRaizCuadrada = true;
            banOperacionPrevia = false;
            break;

        case "raizcubica":
            verificarOperacionPrevia();
            operacionUnaria("3√");
            banRaizCubica = true;
            banOperacionPrevia = false;
            break;
    }
}

function operacionBinaria(op) {
    let num = document.getElementById("input__numero");
    let resultado = document.getElementById("input__resultado");

    if (!banOperacionPrevia) {
        resultado.value += `${num.value} ${op} `;
    }
    else {
        resultado.value = `${resultado.value} ${op}`;
    }
    num.value = "";
}

function operacionUnaria(op) {
    let resultado = document.getElementById("input__resultado");

    if (!banOperacionPrevia) {
        resultado.value += `${op}`;
    }
    else {
        resultado.value = `${resultado.value} ${op}`;
    }
}

/**
 * Verificar si el usuario quiere hacer una operación múltiple antes de darle 
 * al botón =. Si hay una operación previa, se resuelve la operación anterior
 * para, con el resultado que dé, seguir operando.
 */
function verificarOperacionPrevia() {
    let resultado = document.getElementById("input__resultado");

    if (banSumar) {
        resultado.value = sumar(resultado.value);
        banSumar = false;
        banOperacionPrevia = true;
    }
    else if (banRestar) {
        resultado.value = restar(resultado.value);
        banRestar = false;
        banOperacionPrevia = true;
    }
    else if (banMultiplicar) {
        resultado.value = multiplicar(resultado.value);
        banMultiplicar = false;
        banOperacionPrevia = true;
    }
    else if (banDividir) {
        resultado.value = dividir(resultado.value);
        banDividir = false;
        banOperacionPrevia = true;
    }
    else if (banPotencia) {
        resultado.value = potencia(resultado.value);
        banPotencia = false;
        banOperacionPrevia = true;
    }
    else if (banRaizCuadrada) {
        resultado.value = raizCuadrada();
        banRaizCuadrada = false;
        banOperacionPrevia = true;
    }
    else if (banRaizCubica) {
        resultado.value = raizCubica();
        banRaizCubica = false;
        banOperacionPrevia = true;
    }
}

/**
 * Cuando se hace click en el botón = para saber el resultado final.
 */
function realizarOperacion() {
    let resultado = document.getElementById("input__resultado");

    if (banSumar) {
        resultado.value = sumar(resultado.value);
        banSumar = false;
        banResultado = true;
    }
    else if (banRestar) {
        resultado.value = restar(resultado.value);
        banRestar = false;
        banResultado = true;
    }
    else if (banMultiplicar) {
        resultado.value = multiplicar(resultado.value);
        banMultiplicar = false;
        banResultado = true;
    }
    else if (banDividir) {
        resultado.value = dividir(resultado.value);
        banDividir = false;
        banResultado = true;
    }
    else if (banPotencia) {
        resultado.value = potencia(resultado.value);
        banPotencia = false;
        banResultado = true;
    }
    else if (banRaizCuadrada) {
        resultado.value = raizCuadrada();
        banRaizCuadrada = false;
        banResultado = true;
    }
    else if (banRaizCubica) {
        resultado.value = raizCubica();
        banRaizCubica = false;
        banResultado = true;
    }

    limpiarNumero();
}


// ------------------------------- OPERACIONES ------------------------------ //
/**
 * Sumar los números que aparecen en el input resultado y en el input números.
 * @param {string} resultadoParcial Texto del input resultado parcial
 * @returns {number} Resultado de la suma.
 */
function sumar(resultadoParcial) {
    let numeroA = parseFloat(resultadoParcial.substring(0, resultadoParcial.indexOf(" ")));
    let numeroB = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numeroA)) { numeroA = 0; }
    if (isNaN(numeroB)) { numeroB = 0; }
    return numeroA + numeroB;
}

/**
 * Restar los numeros que aparecen en el input resultado y en el input números.
 * @param {string} resultadoParcial 
 * @returns {number} Resultado de la resta.
 */
function restar(resultadoParcial) {
    let numeroA = parseFloat(resultadoParcial.substring(0, resultadoParcial.indexOf(" ")));
    let numeroB = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numeroA)) { numeroA = 0; }
    if (isNaN(numeroB)) { numeroB = 0; }
    return numeroA - numeroB;
}

/**
 * Multiplicar los números que aparecen en el input resultado y el input números.
 * @param {string} resultadoParcial 
 * @returns {number} Resultado de la multiplicación.
 */
function multiplicar(resultadoParcial) {
    let numeroA = parseFloat(resultadoParcial.substring(0, resultadoParcial.indexOf(" ")));
    let numeroB = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numeroA)) { numeroA = 0; }
    if (isNaN(numeroB)) { numeroB = 0; }
    return numeroA * numeroB;
}

/**
 * Dividir los números que aparecen en el input resultado (dividendo) y el 
 * input números (divisor).
 * @param {string} resultadoParcial 
 * @returns {number} Resultado de la division.
 */
function dividir(resultadoParcial) {
    let numeroA = parseFloat(resultadoParcial.substring(0, resultadoParcial.indexOf(" ")));
    let numeroB = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numeroA)) { numeroA = 0; }
    if (isNaN(numeroB)) { numeroB = 0; }

    if (numeroB !== 0) {
        return numeroA / numeroB;
    }
    else {
        alert("No se puede dividir por cero.");
        return 0;
    }
}

/**
 * Realizar potencia entre el input resultado (base) y el input número (exponente).
 * @param {string} resultadoParcial 
 * @returns {number} Resultado de la potencia
 */
function potencia(resultadoParcial) {
    let numeroA = parseFloat(resultadoParcial.substring(0, resultadoParcial.indexOf(" ")));
    let numeroB = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numeroA)) { numeroA = 0; }
    if (isNaN(numeroB)) { numeroB = 0; }

    return Math.pow(numeroA, numeroB);
}

/**
 * Realizar la raíz cuadrada del input número.
 * @returns {Number} La raíz cuadrada del número
 */
function raizCuadrada() {
    let numero = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numero)) { numero = 0; }
    if (numero < 0) {
        alert("Dentro de los números racionales, no existen raíces negativas.")
        return 0;
    }
    return Math.sqrt(numero);
}

/**
 * Realizar la raíz cúbica del input número.
 * @returns {Number} La raíz cúbica del número
 */
function raizCubica() {
    let numero = parseFloat(document.getElementById("input__numero").value);
    if (isNaN(numero)) { numero = 0; }
    if (numero < 0) {
        alert("Dentro de los números racionales, no existen raíces negativas.")
        return 0;
    }
    return Math.cbrt(numero);
}
// -------------------------------------------------------------------------- //


/**
 * Reiniciar la calculadora a su configuración inicial.
 */
function reiniciarCalculadora() {
    limpiarNumero();
    limpiarResultado();
    reiniciarBanderas();
}

/**
 * Limpiar el input de números.
 */
function limpiarNumero() {
    let num = document.getElementById("input__numero");
    num.value = "";
}

/**
 * Limpiar el input de resultado.
 */
function limpiarResultado() {
    let resultado = document.getElementById("input__resultado");
    resultado.value = "";
    banResultado = false;
}

/**
 * Reiniciar todas las variables banderas a su configuración inicial.
 */
function reiniciarBanderas() {
    banSumar = false;
    banRestar = false;
    banMultiplicar = false;
    banDividir = false;
    banPotencia = false;
    banRaizCuadrada = false;
    banRaizCubica = false;

    banResultado = false;
    banOperacionPrevia = false;
}

/**
 * Evento que verifica si se presionó una tecla numérica o un signo de operación
 * aritmética.
 * @param {event} event 
 */
function presioneUnaTecla(event) {
    if (event.key === "1") {
        agregarNumero("1");
    }
    else if (event.key === "2") {
        agregarNumero("2");
    }
    else if (event.key === "3") {
        agregarNumero("3");
    }
    else if (event.key === "4") {
        agregarNumero("4");
    }
    else if (event.key === "5") {
        agregarNumero("5");
    }
    else if (event.key === "6") {
        agregarNumero("6");
    }
    else if (event.key === "7") {
        agregarNumero("7");
    }
    else if (event.key === "8") {
        agregarNumero("8");
    }
    else if (event.key === "9") {
        agregarNumero("9");
    }
    else if (event.key === "0") {
        agregarNumero("0");
    }
    else if (event.key === ".") {
        agregarNumero(".");
    }
    else if (event.key === "+") {
        operacion("sumar");
    }
    else if (event.key === "-") {
        operacion("restar");
    }
    else if (event.key === "*") {
        operacion("multiplicar");
    }
    else if (event.key === "/") {
        operacion("dividir");
    }
    else if (event.key === "Backspace") {
        let num = document.getElementById("input__numero");
        let cadena = num.value;
        num.value = cadena.substring(0, cadena.length - 1);
    }
    else if (event.key === "Enter") {
        realizarOperacion();
    }
}

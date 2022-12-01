var suma = [];
var resta = [];
var multiplicacion = [];
var division = [];

//limpia los input y los deja en blanco
var limpiar = function () {
    document.getElementById("valor1").value = ""
    document.getElementById("valor2").value = ""
}

var mostrarsuma = function () {

    var displaysuma = document.getElementById("displaysuma")
    displaysuma.innerHTML = ""
    for (let x = 0; x < suma.length; x++) {

        displaysuma.innerHTML = displaysuma.innerHTML +

            "<div>" + suma[x].valorsuma + "</div>"
    }
}

// guardar los dos datos de los input 
var sumar = function () {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value

    var resultadosuma = (parseInt(valor1) + parseInt(valor2))

    suma.push({ valorsuma: resultadosuma })

    limpiar()
    mostrarsuma()
} 

var mostrarresta = function () {

    var displayresta = document.getElementById("displayresta")
    displayresta.innerHTML = ""
    for (let a = 0; a < resta.length; a++) {

        displayresta.innerHTML = displayresta.innerHTML +

            "<div>" + resta[a].valorresta + "</div>"
    }
}

var restar = function() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value

    var resultadoresta = (parseInt(valor1) - parseInt(valor2))

    resta.push({ valorresta: resultadoresta })

    limpiar()
    mostrarresta()
}

var mostrarmultiplicacion = function () {

    var displaymultiplicacion = document.getElementById("displaymultiplicacion")
    displaymultiplicacion.innerHTML = ""
    for (let b = 0; b < multiplicacion.length; b++) {

        displaymultiplicacion.innerHTML = displaymultiplicacion.innerHTML +

            "<div>" + multiplicacion[b].valormultiplicacion + "</div>"
    }
}

var multiplicar = function() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value

    var resultadomultiplicacion = (parseInt(valor1) * parseInt(valor2))

    multiplicacion.push({ valormultiplicacion: resultadomultiplicacion })

    limpiar()
    mostrarmultiplicacion()
}

var mostrardivision = function () {

    var displaydivision = document.getElementById("displaydivision")
    displaydivision.innerHTML = ""
    for (let d = 0; d < division.length; d++) {

        displaydivision.innerHTML = displaydivision.innerHTML +

            "<div>" + division[d].valordivision + "</div>"
    }
}

var dividir = function() {
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value

    var resultadodivision = (parseInt(valor1) / parseInt(valor2))

    division.push({ valordivision: resultadodivision })

    limpiar()
    mostrardivision()
}


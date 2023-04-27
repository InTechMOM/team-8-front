function enviarLink() {
    var link=document.getElementById("linkInput").value;
    console.log(link);
}

function enviarEvaluacionUno() {
    if (document.getElementById ('one').checked) {
        console.log("0%");
    }
    if (document.getElementById ('two').checked) {
        console.log("25%");
    }
    if (document.getElementById ('three').checked) {
        console.log("50%");
    }
    if (document.getElementById ('four').checked) {
        console.log("75%");
    }
    if (document.getElementById ('five').checked) {
        console.log("100%");
    }
}
function enviarEvaluacionDos() {
    if (document.getElementById ('oneTwo').checked) {
        console.log("0%");
    }
    if (document.getElementById ('twoTwo').checked) {
        console.log ("25%");
    }
    if (document.getElementById ('threeTwo').checked) {
        console.log("50%");
    }
    if (document.getElementById ('fourTwo').checked) {
        console.log("75%");
    }
    if (document.getElementById ('fiveTwo').checked) {
        console.log("100%");
    }
}
function enviarEvaluacionTres() {
    if (document.getElementById ('oneThree').checked) {
        console.log("0%");
    }
    if (document.getElementById ('twoThree').checked) {
        console.log("25%");
    }
    if (document.getElementById ('threeThree').checked) {
        console.log("50%");
    }
    if (document.getElementById ('fourThree').checked) {
        console.log("75%");
    }
    if (document.getElementById ('fiveThree').checked) {
        console.log("100%");
    }
}
function enviarEvaluacionCuatro() {
    if (document.getElementById ('oneFour').checked) {
        console.log("0%");
    }
    if (document.getElementById ('twoFour').checked) {
        console.log("25%");
    }
    if (document.getElementById ('threeFour').checked) {
        console.log("50%");
    }
    if (document.getElementById ('fourFour').checked) {
        console.log("75%");
    }
    if (document.getElementById ('fiveFour').checked) {
        console.log("100%");
    }
}

function enviar() {
    enviarLink()
    enviarEvaluacionUno()
    enviarEvaluacionDos()
    enviarEvaluacionTres()
    enviarEvaluacionCuatro()
}
const correo = document.getElementById('emailInput')
const ingreso = document.getElementById('ingresar')
const vercomo = document.getElementsByName('persona')

ingreso.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        correo: correo.value,
        vercomo: vercomo.value
    }
})

function guardar(){ //funcion para guardar y validar formulario
    var email=document.getElementById("emailInput").value;
    if (email=="") {
        alert ("Ingresar E-mail");
        document.getElementById("emailInput").focus();
    } else{
        console.log(email);
        document.getElementById("emailInput").value="";
    }
}
function todas() { //llamar a todas las funciones
    guardar()
    rol()
}

function rol() { //valor y redireccion de rol
    if (document.getElementById ('estudiante').checked) {
        console.log ("estudiante")
        window.location.href = "pages/perfil-alumno.html";
    }
    if (document.getElementById ('profesor').checked) {
        console.log ("profesor")
        window.location.href = "pages/perfil-profesor.html";
    }
}

//validaciones

const correo = document.getElementById('emailInput')
const ingreso = document.getElementById('ingresar')
const vercomo = document.getElementsByName('rol')

ingreso.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        correo: correo.value,
        vercomo: vercomo.value
    }
})

function guardar(){ //funcion para guardar y validar formulario
    var email=document.getElementById("emailInput").value;
        if (document.getElementById ('estudiante').checked) {
            window.location.href = "pages/perfil-alumno.html";
        } else{
            if (document.getElementById ('profesor').checked) {
                window.location.href = "pages/perfil-profesor.html";
            }
            else{
                alert ("Seleccione Profesor o Estudiante");
            }
        }
    }   


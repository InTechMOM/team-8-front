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
    if (email=="") {
        alert ("Ingresar E-mail");
        document.getElementById("emailInput").focus();
    } else{
        if (document.getElementById ('estudiante').checked) {
            console.log(email);
            document.getElementById("emailInput").value="";
            console.log ("estudiante")
            window.location.href = "pages/perfil-alumno.html";
        } else{
            if (document.getElementById ('profesor').checked) {
                console.log(email);
                document.getElementById("emailInput").value="";
                console.log ("profesor")
                window.location.href = "pages/perfil-profesor.html";
            }
            else{
                alert ("Seleccione Profesor o Estudiante");
            }
        }
    }    
}

//Conexion Api Post


/*const form = document.getElementById('datos');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = new FormData(event.target);

    const dataObject = Object.fromEntries (data)

    fetch('https://team-8-back.onrender.com/users', { 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data0bject)
    })
    .then((response) => response.json())
    .then((data) => )
})*/
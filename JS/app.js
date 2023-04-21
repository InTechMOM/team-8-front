const correo = document.getElementById('email-input')
const ingreso = document.getElementById('ingresar')
const vercomo = document.getElementsByName('persona')

ingreso.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        correo: correo.value,
        vercomo: vercomo.value
    }
})

function functionIngresar() {

    if (document.getElementById("estudiante").checked) {
        window.location.href = "pages/perfil-alumno.html";
    } else {
        if(document.getElementById("profesor").checked){
            window.location.href = "pages/perfil-profesor.html";
        } 
    }

}

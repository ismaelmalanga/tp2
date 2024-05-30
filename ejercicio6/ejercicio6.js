const enviar=document.getElementById("Enviar")
enviar.addEventListener("click",(e) => {
    e.preventDefault();
    validarFormulario();
})

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
    let altura = parseInt(document.getElementById("altura").value);
    let correo = document.getElementById("correo").value;
    if (nombre == "" || apellido == "") {
        mostrarMensaje("Nombre y apellido son obligatorios.","red");
        } else if (nombre.length > 50 || apellido.length > 50) {
        mostrarMensaje("Nombre y apellido tiene que tener menos de 50 caracteres.","red");
        } else if (edad < 0 || isNaN(edad)) {
        mostrarMensaje("Edad debe ser un numero positivo.", "red");
        } else if (edad < 18) {
        mostrarMensaje("Tiene que ser mayor de edad para enviar el formulario.","red");
        } else if (altura < 30 || altura > 230 || isNaN(altura)) {
        mostrarMensaje("Altura debe estar entre 30 cm y 230 cm.","red");
        } else if (!correo.includes("@")) {
        mostrarMensaje("Ingresar un correo electronico que sea valido.","red");
        } else {
        mostrarMensaje("Todos los datos son correctos.","green");
        }
}

function mostrarMensaje(texto,color) { 
    mensaje.textContent = texto;
    mensaje.style.color = color;
}
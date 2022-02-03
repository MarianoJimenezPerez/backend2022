/* --------------------------------Globales-------------------------------- */

const inputName = document.querySelector('#name');
const inputMessage = document.querySelector('#message');
const botonEnviar = document.querySelector('#boton-enviar');
const bandeja = document.querySelector('#bandeja');

/* --------------------------------Funciones-------------------------------- */

function enviarMensaje() {
    socket.emit('nuevoMensaje', {autor: inputName.value, mensaje: inputMessage.value})
    return false //para que no haya problemas con el submite
}

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    enviarMensaje()
});

/* --------------------------------Socket-------------------------------- */

const socket = io.connect();
socket.on('bandejaHistorica', mensajes => {
    bandeja.innerHTML= ''
    mensajes.forEach(mensaje => {
        let p = document.createElement('p');
        p.innerHTML = `
            <b>${mensaje.autor}</b> : ${mensaje.mensaje}
        `
        bandeja.appendChild(p)
    });
})


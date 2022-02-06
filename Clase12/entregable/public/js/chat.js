/* --------------------------------Globales-------------------------------- */

const btnChatSubmit = document.querySelector('#btn-chat-submit');
const inputChatEmail = document.querySelector('#input-chat-email');
const inputChatMessage = document.querySelector('#input-chat-message');
const chatBox = document.querySelector('#chat-box');

/* --------------------------------Funciones-------------------------------- */

function enviarMensaje() {
    let date = new Date
    socket.emit('nuevoMensaje', {
        email: inputChatEmail.value,
        message: inputChatMessage.value,
        hour: `[${date.getHours()} ${date.getMinutes()}]` //envio la fecha de en formato [hora:minutos] de cuando se envía un nuevo mensaje
    })
    return false 
};

btnChatSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    enviarMensaje();
    inputChatMessage.value = ''; //limpiamos el input para evitar mensajes repetitivos
});

/* --------------------------------Socket-------------------------------- */

socket.on('mensajesHistoricos', mensajes => {
    chatBox.innerHTML= ''
    mensajes.forEach(mensaje => {
        let p = document.createElement('p');
        p.innerHTML = `
            <b><span class="chat-autor">${mensaje.email}</span></b>
            <span class="chat-hour">${mensaje.hour}:</span>
            <i><span class="chat-message">${mensaje.message}</span>
        `
        chatBox.appendChild(p)
    });
});
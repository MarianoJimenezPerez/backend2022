const template = Handlebars.compile('<h1>{{nombre}}</h1>'); // compila la plantilla
let mensaje = 'chau';
const html = template({ nombre: mensaje }); // genera el html
document.querySelector('.contenedor').innerHTML = html; // inyecta el resultado en la vista
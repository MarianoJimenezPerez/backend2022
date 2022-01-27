const template = Handlebars.compile('<h1>{{nombre}}</h1>'); // compila la plantilla
const html = template({ nombre: 'coder' }); // genera el html
document.querySelector('span').innerHTML = html; // inyecta el resultado en la vista
const cardsBody = document.querySelectorAll('.card-body');

for( i = 0; i < cardsBody.length; i++){

    /* Genrar inputs, funcion aplicada en el put*/

    function generarInput(form, nombre, placeholder){
        let campo = document.createElement('input');
        campo.classList.add('mt-2')
        campo.name= nombre;
        campo.placeholder = placeholder;
        form.appendChild(campo)
    }

    function generarSubmit(form){
        let boton = document.createElement('button');
        boton.classList.add('btn');
        boton.classList.add('btn-success');
        boton.classList.add('mt-2');
        boton.type = 'submit';
        boton.innerHTML = 'Guardar';
        form.appendChild(boton);
    }

    /* Logica para delete */

    let cardBody = cardsBody[i];
    let id = cardBody.querySelector('.product-id').textContent;
    let eliminarProducto = cardBody.querySelector('.eliminar-producto');
    eliminarProducto.addEventListener('click', () => {
        let url = `http://localhost:8080/productos/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(window.location.href = 'http://localhost:8080/productos/') // envio un get para actualizar la vista
            .catch(error => console.log(error))
    })

    /* Logica para put */

    let modificarProducto = cardBody.querySelector('.modificar-producto');
    let formModify = document.createElement('form');
    formModify.method = 'put';
    formModify.action = `http://localhost:8080/productos/${id}`;
    generarInput(formModify, "nombre", "Nombre");
    generarInput(formModify, "descripcion", "Descripción");
    generarInput(formModify, "foto", "URL foto");
    generarInput(formModify, "stock", "Stock");
    generarInput(formModify, "precio", "Precio");
    generarSubmit(formModify);
    

    modificarProducto.addEventListener('click', () => {
        cardBody.appendChild(formModify)
    })
}




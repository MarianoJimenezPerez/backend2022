// Las funciones de middleware son aquellas que tienen acceso al objeto de solicitud
// (req), al objeto de respuesta (res) y a la siguiente función de middleware en el
// ciclo de solicitud/respuestas de la aplicación (next)


// Las funciones de middleware pueden realizar las siguientes tareas:
// Ejecutar cualquier código.
// Realizar cambios en la solicitud y los objetos de respuesta.
// Finalizar el ciclo de solicitud/respuestas.
// Invocar la siguiente función de middleware en la pila.


// Una aplicación Express puede utilizar los siguientes tipos de middleware:
// 1) Middleware a nivel de aplicación
        const app = express();

        app.use(function (req, res, next) {     // Este ejemplo muestra una función de middleware sin ninguna vía de acceso de montaje. 
            console.log('Time:', Date.now());   // La función se ejecuta cada vez que la aplicación recibe una solicitud.
            next();
        });

// 2) Middleware a nivel del Router
        // Se pueden agregar una o múltiples funciones middlewares en los procesos
        // de atención de las rutas como se muestra a continuación:
        const app = express();
        const router = express.Router();

        // funcion middleware sin via de acceso de montaje. El codigo es ejecutado por cada peticion al router
        router.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
        });

        // El middleware de nivel de router funciona de la misma manera que el middleware
        // de nivel de aplicación, excepto que está enlazado a una instancia de express.Router().


// 3) Middleware de manejo de errores

        // Estas funciones se definen de la misma forma que otras funciones de middleware,
        // excepto que llevan cuatro argumentos en lugar de tres, específicamente con la firma (err, req, res, next):
        app.use(function(err, req, res, next) {
            console.error(err.stack);
            res.status(500).send('Something broke!');
        });


// 4) Middleware incorporado
        // La única función de middleware incorporado en Express es express.static.
        // Esta función es responsable del servicio de archivos estáticos:
        app.use(express.static('public', options));

// 5) Middleware de terceros
        // Podemos instalar y utilizar middlewares de terceros para añadir funcionalidad
        // a nuestra aplicación. El uso puede ser a nivel de aplicación o a nivel de Router.
        // Por ejemplo, instalamos y usamos la función de middleware de análisis de cookies cookie-parser.
        
        /*$ npm install cookie-parser*/

        var express = require('express');
        var app = express();
        var cookieParser = require('cookie-parser');

        // load the cookie-parsing middleware
        app.use(cookieParser());

/*
¿Qué es Webpack?

Webpack es un empaquetador de módulos (module bundler), que genera un archivo
único con todos los módulos que necesita la aplicación para funcionar.
Permite encapsular todos los archivos JavaScript en un único archivo, por ejemplo bundle.js
Webpack se ha convertido en una herramienta de build muy versátil.

Con Webpack vamos a poder...

    -Generar solo aquellos fragmentos de JS que realmente necesita cada página (haciendo más rápida su carga).

    -Disponer de varios loaders para importar y empaquetar también otros recursos (CSS, templates, …) así como otros lenguajes (ES6 con Babel, TypeScript, SaSS, etc).

    -Utilizar plugins que permiten hacer otras tareas importantes, como por ejemplo minificar y ofuscar el código.


Existen varias formas de utilizar Webpack. Trabajaremos con la versión en línea de comandos (CLI) que realiza una empaquetación directa:

Creamos un proyecto de Node.js con npm init -y
Instalamos Webpack y Webpack CLI
    npm install webpack webpack-cli

De los dos módulos instalados, el primero es el propio webpack y el segundo es la dependencia para usar webpack desde la consola de comandos (Command Line Interface).


*/
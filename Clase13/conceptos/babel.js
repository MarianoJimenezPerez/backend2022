/*
¿Qué es Babel?

Babel es un transpilador que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras)
a JS que cualquier navegador o versión de Node.js entienda. Babel funciona mediante plugins con los cuales le indicamos cuál
es la transformación que vamos a efectuar. Con el plugin babel-plugin-transform-es2015-arrow-functions podemos decirle que
transforme las arrow functions de ECMAScript 2015 a funciones normales.

Babel.js y Node.js


Existen varias formas de utilizar Babel. Vamos a trabajar con la versión en línea de comandos (CLI) que realiza una compilación directa. Para ello:

    1-Creamos un proyecto de Node.js con npm init -y

    2-Instalamos la librería Babel, el cliente, y el plugin

        npm install @babel/core @babel/cli @babel/preset-env      @babel/node

    3-El primer módulo es la librería principal, el segundo es el cliente por terminal, y el tercero es el plugin de configuración
    para que soporte todos los JavaScript de la nueva generación, cuarto ejecutar.


*/

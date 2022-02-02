/*
Socket.IO es una biblioteca de JavaScript para aplicaciones web en tiempo real.
Permite la comunicación bidireccional en tiempo real entre servidores y clientes web.
Tiene dos partes: 
    Una biblioteca del lado del cliente que se ejecuta en el navegador.
    Una biblioteca del lado del servidor para Node.js. 
Ambos componentes tienen una API casi idéntica. Al igual que Node.js, está impulsado por eventos.
Socket.IO utiliza principalmente el protocolo Websocket proporcionando la misma interfaz.
Se puede usar como un contenedor para Websocket aunque proporciona muchas más funciones,
incluida la transmisión a múltiples sockets, el almacenamiento de datos asociados con cada
cliente y E/S asíncronas.
Se puede instalar con npm.

Características:

Fiabilidad: 
    Las conexiones se establecen incluso en presencia de:
    proxies y balanceadores de carga.
    firewall personal y software antivirus.

Soporte de reconexión automática:
    A menos que se le indique lo contrario, un cliente desconectado intentará
    siempre volver a conectarse, hasta que el servidor vuelva a estar disponible.

Detección de desconexión:
    Se implementa un mecanismo de heartbeat, lo que permite que tanto el servidor
    como el cliente sepan cuando el otro ya no responde.

Soporte binario:
    Se puede emitir cualquier estructura de datos serializable, que incluye:
        ArrayBuffer y Blob en el navegador
        ArrayBuffer y Buffer en Node.js

*/

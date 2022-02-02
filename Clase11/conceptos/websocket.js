/*
Websocket es un protocolo de red basado en TCP (NO HTTP) que establece cómo deben intercambiarse
datos entre redes.
Es un protocolo fiable y eficiente, utilizado por prácticamente todos los clientes.
El protocolo TCP establece conexiones entre dos puntos finales de comunicación, llamados sockets.
De esta manera, el intercambio de datos puede producirse en las dos direcciones.

En las conexiones bidireccionales, como las que crea Websocket, 
se intercambian datos en ambas direcciones al mismo tiempo. 
La ventaja de usar Websocket es acceder de forma más rápida a los datos.
Websocket permite una comunicación directa y en tiempo real entre una aplicación web
y un servidor Websocket.

¿Para que se utiliza?

Para establecer conexiones de forma rápida.
Por ejemplo: chats de asistencia técnica, tickers de noticias o de actualizaciones
de bolsa en directo, servicios de mensajería instantánea y juegos en tiempo real.

Desventajas uso de HTTP en chat

El uso tradicional de las conexiones HTTP tiene el inconveniente de que el cliente
siempre carga la página HTML entera. Para resolver el problema se desarrolló la tecnología AJAX.
No obstante, trae la desventaja de establecer conexiones unidireccionales. 
Al permitir la comunicación en una sola dirección daría lugar a largos tiempos de espera
en las intensivas aplicaciones de hoy en día, especialmente en los chats.

Ventajas uso de WEBSOCKET (TCP) en chat

Websocket crea conexiones bidireccionales que permiten el intercambio de datos en ambos sentidos,
lo cual hace posible el contacto directo con el navegador y, con ello, permite cortos periodos
de carga. 
En cuanto se envía un mensaje, como podría ser uno en un chat de soporte técnico, este llega y
se muestra directamente al otro lado.

*/
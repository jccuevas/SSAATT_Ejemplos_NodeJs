/* 
 * Ejemplos de Node.js y Express de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: marzo 2020
 */


const http = require('http'); //Se importa el módulo de soporte a HTTP
const hostname = '127.0.0.1';
const port = 3000;

//Se crea un servidor HTTP y se devuelve una referencia a él.
const server = http.createServer((req, res) => {//Cuando se recibe una petición se llama al evento request
    // que proporciona dos objetos: 
    // una petición (objeto http.IncomingMessage) 
    // y una respuesta (objeto http.ServerResponse).

  res.statusCode = 200;//Establece el código de estado de la respuesta a 200
  // lo cual implica que la petición se ha realizado satisfactoriamente.
  res.setHeader('Content-Type', 'text/plain');//Se establece el tipo de la respuesta a enviar.
  res.end('Hola Mundo'); //Se cierra la respuesta añadiendo el contenido como parámetro.
}); 

server.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`); 
}); 


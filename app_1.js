/* 
 * Ejemplos de Node.js y Express de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: marzo 2020
 */


const http = require('http'); //Se importa el módulo de soporte a HTTP
const fs = require('fs');//Acceso a ficheros

const hostname = '127.0.0.1';
const port = 3000;

//Se crea un servidor HTTP y se devuelve una referencia a él.
const server = http.createServer((req, res) => {//Cuando se recibe una petición se llama al evento request
    // que proporciona dos objetos: 
    // una petición (objeto http.IncomingMessage) 
    // y una respuesta (objeto http.ServerResponse).
    let instant = new Date(Date.now());
    let logEntry = instant.toLocaleString("es-Es") + ";" + req.connection.remoteAddress + ";" + req.method+";"+req.url+"\n";
    res.statusCode = 200;//Establece el código de estado de la respuesta a 200
    // lo cual implica que la petición se ha realizado satisfactoriamente.
    res.setHeader('Content-Type', 'text/plain');//Se establece el tipo de la respuesta a enviar.

    fs.stat("./log.txt", 'r', (error, stats) => {
        if (error) {
            console.log("[ERROR] " + error);
        } else {
            stats.isFile ? console.log("[FILE] Fichero log.txt es un archivo.") : console.log("[FILE] Fichero log.txt no es un archivo.");
        }
    });

    fs.open("./log.txt", 'r', (error, fd) => {
        if (error) {
            console.log("[ERROR] " + error);
            res.end('Fin del registro'); //Se cierra la respuesta añadiendo el contenido como parámetro.
        } else {
            console.log("[FILE] Fichero log abierto");
            res.write("Abriendo fichero log\n");
            fs.appendFile("log.txt", logEntry, (error) => {
                if (error) {
                    res.end('\nError al añadir\nFin del registro'); //Se cierra la respuesta añadiendo el contenido como parámetro.
                } else {
                    fs.readFile("log.txt", "utf8", (error, data) => {
                        if (error) {
                            res.end('Error al leer el archivo'); //Se cierra la respuesta añadiendo el contenido como parámetro.
                        } else {
                            res.write(data);
                            res.end('\nFin del registro'); //Se cierra la respuesta añadiendo el contenido como parámetro.
                        }
                    });
                }
            });
        }

    });



});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});


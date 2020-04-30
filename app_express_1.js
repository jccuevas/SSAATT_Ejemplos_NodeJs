/* 
 * Ejemplos de Node.js y Express de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: abril 2020
 */


const http = require('http'); //Se importa el módulo de soporte a HTTP
const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("¡Ejemplo de Express!");

});


app.get("/saludo", (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'});
    res.end("<html><body>Hola</body></html>");
});


app.get("/despedida", (req, res) => {
    res.status(200)
       .type('text/html')
       .send("<html><body>Adios</body></html>");
});


app.get("/propiedades", (req, res) => {
    let html="<html><body>"
            
    res.status(200);
    res.type("html");
    res.write("<html><body>");
    res.write("req.baseURL="+req.baseUrl+"<br>");
    res.write("</body></html>");   
    res.end();
});


app.listen(port, hostname, function () {
    console.log('Ejemplo de app escuchando en el puerto 3000');
});


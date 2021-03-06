/* 
 * Ejemplos de Node.js y Express de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: abril 2020
 */


const http = require('http'); //Se importa el módulo de soporte a HTTP
const express = require('express');
const bodyParser = require('body-parser')
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.route("/saludo")
        .get((req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'});
            res.end("<html><meta charset='utf8'><body>Hola método GET</body></html>");
        })
        .post(urlencodedParser,(req, res) => {
            let data="";
            
                res.writeHead(200, {
                    'Content-Type': 'text/html'});
                res.write("<html><meta charset='utf8'><body>Hola método POST");
                for(let param in req.body){
                    res.write("<p>"+param+" "+req.body[param]+"</p>");
                }
        res.end("</body></html>");
                
           
        });




app.listen(port, hostname, function () {
    console.log('Ejemplo de app escuchando en el puerto 3000');
});


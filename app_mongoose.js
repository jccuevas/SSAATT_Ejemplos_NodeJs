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
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

//Definimos un Schema para los usuarios
var userSchema = new Schema({
    nombre: String,
    apellido1: String,
    apellido2: String
});

const User = mongoose.model('User', userSchema);


app.route("/user")
        .get((req, res) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'});
            res.write("<html><meta charset='utf8'><body>Hola método GET");
            User.find(function (err, users) {
                if (err) {
                    res.write("<p>Error</p>");
                } else {
                    for (let item of users) {
                        res.write(`<p> ${item.nombre} ${item.apellido1}`);
                    }

                }
                res.end("</body></html>");

            });

        })
        .post(urlencodedParser, (req, res) => {
            console.log("POST /user" + JSON.stringify(req.body));
            let user = new User({nombre: req.body.nombre, apellido1: req.body.apellido1, apellido2: req.body.apellido2});
            res.writeHead(200, {
                'Content-Type': 'text/html'});
            res.write("<html><meta charset='utf8'><body>Hola método POST");
            user.save(function (err, user) {
                if (err) {
                    res.write("<p>Error</p>");

                } else {
                    res.write("<p>Grabado</p>")
                    for (let param in req.body) {
                        res.write("<p>" + param + ": " + req.body[param] + "</p>");
                    }
                }
                res.end("</body></html>");
            });
        });


app.listen(port, hostname, function () {
    console.log('Ejemplo de app escuchando en el puerto 3000');
});


/* 
 * Ejemplos de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: marzo 2020
 */


var http = require("http");// Servidor HTTP
var port = 8080;
/*Ejemplo solo con node.js*/
/*
 
 var servidor = http.createServer(function(request,response){
 response.write("<html><meta charset='utf-8'><body><h1>Servidor node.js</h1><h2>Cabeceras de la petición</h2>");
 
 for(let p of request.rawHeaders){
 try{
 response.write("<p>"+p+":"+request[p]+"</p>");
 }catch(TypeError){
 response.write("<p>"+p+": Error</p>");
 }
 }
 response.write("</body></html>");
 response.end();
 });
 
 servidor.listen(port);
 */


/* Ejemplo con express con http*/
var express = require('express');
var router = express.Router();
var app = express();
var Mustache = require('mustache');
var mustacheExpress = require('mustache-express');




//app.set('view engine', 'pug');//Para usar pug como plantilla

// para usar Mustache Express
app.engine('html', mustacheExpress());
app.set('view engine', 'html');

//Definción de las rutas para las plantillas HTML
app.set('views', './views');




//Ruta a los recursos estáticos, normalmente CSS o html sin personalizar
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render('index', {title: '¡Hola!', message: '¡Bienvenido!'});
});



var exam = '{"título":"Examen1","autor":"jccuevas","preguntas":[{"título":"pregunta1","enunciado":"Responda correctamente","respuestas": [{"puntos": 0,"texto": "Respuesta 1"}, {"puntos": 0,"texto": "Respuesta 2"}, {"puntos": 1,"texto": "Respuesta 3"}]}]}';

app.get("/test", function (request, response) {
    response.send(exam);
});

//Ejemplos Mustache

var view = {
    title: "Joe",
    calc: function () {
        return 2 + 4;
    }
};

var user = {
    user: "Joe",

};


app.get("/mustache", function (req, res) {
    res.render("mustache", view, function (err, html) {
        //En caso de error
        if(err){
        res.write("oops: "+err+" "+html);
    }else{
        res.write(html);
    }
        res.end();
    });
});

app.get("/m", function (request, response) {
    var output = Mustache.render("{{title}} spends {{calc}}", view);
    response.send(output);
});


app.listen(port);

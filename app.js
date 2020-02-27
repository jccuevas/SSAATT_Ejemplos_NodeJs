/* 
 * Ejemplos de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: marzo 2020
 */


var http = require("http");// Servidor HTTP
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

servidor.listen(8080);
*/


/* Ejemplo con express con http*/


var express = require('express');
var router = express.Router();
var app = express();
var port = 8080;

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('./public'));

app.get("/",function(req,res){
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});

var exam='{"título":"Examen1","autor":"jccuevas","preguntas":[{"título":"pregunta1","enunciado":"Responda correctamente","respuestas": [{"puntos": 0,"texto": "Respuesta 1"}, {"puntos": 0,"texto": "Respuesta 2"}, {"puntos": 1,"texto": "Respuesta 3"}]}]}';

app.get("/test",function(request,response){
    response.send(exam);
});

app.listen(port);

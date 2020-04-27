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

app.get("/",(req,res)=>{
    res.send("¡Ejemplo de Express!");
   
});

app.listen(port,hostname, function () {
  console.log('Ejemplo de app escuchando en el puerto 3000');
});


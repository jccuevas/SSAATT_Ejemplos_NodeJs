/* 
 * Ejemplos de Node.js y Express de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: abril 2020
 */


const http = require('http'); //Se importa el módulo de soporte a HTTP
const express = require('express');
const cookieParser = require('cookie-parser');


const hostname = '127.0.0.1';
const port = 3000;

const app = express();

let veces=1;
const cookie_name="NODEJS_SSAATT";

app.use(cookieParser());

app.get("/",(req,res)=>{
    for(let cookie in req.cookies){
        console.log("Cookie "+cookie+" valor="+req.cookies[cookie]);
    }  
    res.cookie(cookie_name,"Veces conectado:"+veces);
    veces++;
    res.send("¡Ejemplo de Express con Cookies!"); 
});

app.listen(port,hostname, function () {
  console.log('Ejemplo de app escuchando en el puerto 3000');
});


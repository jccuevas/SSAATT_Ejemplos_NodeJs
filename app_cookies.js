/*
 * Ejemplos de Node.js, Express y cookie parser de la asignatura Servicios y Aplicaciones Telemáticas
 * Grado en Ingeniería Telemática
 * Grado en Ingeniería de Tecnologías de la Telecomunicación
 * Autor: Juan Carlos Cuevas Martínez
 * Fecha: septiembre 2024
 * Versión: 1.0
 */

const express = require("express");
const cookieParser = require("cookie-parser"); //Permite extraer las cookies con req.cookies
const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.use(cookieParser()); //Para usar el middleware Cookie Parser

app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8",
    "Set-Cookie": "sid=123456; Max-Age=30",
  });
  res.end("¡He creado una cookie!");
});

app.get("/saludo", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  let cookies = req.cookies;
  console.log("Cookies: ", req.cookies);
  res.end(
    "<html><body>Hola" +
      (cookies ? JSON.stringify(cookies) : "No hay cookies") +
      "</body></html>"
  );
});

app.get("/despedida", (req, res) => {
  res.status(200).type("text/html").send("<html><body>Adios</body></html>");
});

app.get("/propiedades", (req, res) => {
  let html = "<html><body>";

  res.status(200);
  res.type("html");
  res.write("<html><body>");
  res.write("req.baseURL=" + req.baseUrl + "<br>");
  res.write("</body></html>");
  res.end();
});

app.listen(port, hostname, function () {
  console.log("Ejemplo de app escuchando en el puerto 3000");
});

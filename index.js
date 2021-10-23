/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    
    Docentes: Nicolás Facón, Martín Rivas
    
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias

const express = require("express"); //Para el manejo del servidor Web
const exphbs = require("express-handlebars"); //Para el manejo de los HTML
const bodyParser = require("body-parser"); //Para el manejo de los strings JSON
const MySQL = require("./modulos/mysql"); //Añado el archivo mysql.js presente en la carpeta módulos
//const Preguntados = require('./modulos/preguntados');

const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static("public")); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set("view engine", "handlebars"); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

app.listen(Listen_Port, function () {
  console.log(
    "Servidor NodeJS corriendo en http://localhost:" + Listen_Port + "/"
  );
});

/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/

/* Ejemplo query a la base de datos */
/* const result = await MySQL.realizarQuery("SELECT * FROM Usuarios")

/*Renderizados */
app.get("/", function (req, res) {
  res.render("login", null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

app.get("/register", function (req, res) {
  res.render("register", null);
});

app.get("/cines", async function (req, res) {
  const result = await MySQL.realizarQuery("SELECT * FROM Cines");
  res.render("cine", {cines: result});
});

app.get("/funciones", async function (req, res) {
  console.log(req.body)
  res.send("Hola")
});

/*Funciones POST */
app.post("/login", function (req, res) {});

app.post("/register", async function (req, res) {
  const {email, password, nombre, dni, apellido} = req.body;
  console.log(email)
  const result = await MySQL.realizarQuery(`INSERT INTO Usuarios VALUES (3,"${nombre}","${apellido}","${email}","${dni}","${password}")`);
  console.log(result)
});

app.put("/login", function (req, res) {
  //Petición PUT con URL = "/login"
  res.send(null);
});

// Traemos express
const express = require('express');
const routerApi = require('./routes');

// Lo metemos dentro de una variable que vamos a estar referenciando
const app = express();
// Asignamos una variable con el número en el que queramos asignar el puerto
const port = 3000;

//para empezar a recibir información en el formato json
app.use(express.json());

// Usando nuestra variable app, que es express le pasamos como primer argumento
// un endpoint al que queramos responder, y como segundo argumento un callback
// con el código que vamos a ejecutar en este.

app.get("/", (req, res) =>{
	// req, res es para manejar la petición y la respuesta que le queremos mandar a esta
	// petición, puedes ver los distintos métodos de express en la documentación
	// aquí usamos send, que forma parte del response como método
  res.send('Hola mi server en Express');
});

app.get('/home', (req, res) =>{
  res.send("Hola, Bienvenido");
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola, soy una nueva ruta');
});

app.listen(port, () =>{
  console.log("My port: " + port);
});


routerApi(app);

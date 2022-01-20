// Traemos express
const express = require('express');
//me traigo cors para poder hacer solicitudes desde otros origenes
const cors = require('cors');
const routerApi = require('./routes');
//me traigo a los midlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// Lo metemos dentro de una variable que vamos a estar referenciando
const app = express();
// Asignamos una variable con el número en el que queramos asignar el puerto
const port = 3000;

//para empezar a recibir información en el formato json
app.use(express.json());

const whitelist = ['http://127.0.0.1:5500/frontend.html', 'https://myapp.co'];// con esto se limita el acceso a solo los que yo ponga, solo ellos podran hacer request
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) !==1) {//si el origen está dentro de mi wuitelist
      callback(null, true);//no hay error y permite el acceso
    } else {
      callback(new Error('no permitido'));//si no está dentro de la whitelist no tiene permitido el acceso
    }
  }
}
// app.use(cors());//solo con esto ya tienen acceso todos los origenes a mi api
app.use(cors(options));//así solo tendrian acceso los que yo configuré


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


routerApi(app);
//los middlewares siempre se usan luego del router
// en el orden que los ponga es en el que se ejecutan uno tras otro
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () =>{
  console.log("My port: " + port);
});

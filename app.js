const express = require('express'); // Importa express.
const app = express(); // Manda a llamar a express
const port = 4000; // Maneja el puerto
const comidaRouter = require('./routes/routes'); // Llama al archivo de rutas
const morgan = require('morgan');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev')); // Configura morgan para su uso únicamente en desarrollo

app.use('/API', comidaRouter);

app.use((req, res) => {
    console.log('End Point no encontrado');
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(port, () => { // el app listen ayuda a escuchar el puerto
    console.log('Listening on port ' + port + ' wiiiiiiiiii ♥'); // se envía un mensaje a la consola para saber que se está usando el puerto
});

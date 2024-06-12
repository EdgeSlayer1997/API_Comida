const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({mensaje: "Aplicación corriendo correctamente"});
})

app.listen(port, () => {
    console.log("Aplicación corriendo en el puerto: ", port);
});
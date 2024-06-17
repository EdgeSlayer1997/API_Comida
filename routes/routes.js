const express = require('express');
const Router = express.Router();

const verMenu = Router.get("/", (req, res) => {
    return res.json({mensaje: "Sin cargo, sin comida"});
})

module.exports = {
    verMenu
}
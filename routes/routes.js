const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    return res.json({ mensaje: "Sin cargo, sin comida" });
});

module.exports = router;

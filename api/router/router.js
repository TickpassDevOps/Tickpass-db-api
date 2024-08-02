const express = require("express")
const router = express.Router()

const peticiones = require('../querys');

router.get("/", peticiones.get);
router.post("/ingresar",peticiones.post);
module.exports = router;

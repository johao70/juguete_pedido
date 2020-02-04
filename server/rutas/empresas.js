const express = require("express");

const router = express.Router();
const Empresas = require('../models/empresas');

router.get("/procesar", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.Fedex());
  res.json(empresa.CorreoEcuador());
  res.json(empresa.Servientrega());
});

module.exports = router;
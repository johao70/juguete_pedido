const express = require("express");

const router = express.Router();
const Empresas = require('../models/empresas');

router.get("/fedex", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.Fedex());
});

router.get("/correos-ecuador", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.CorreoEcuador());
});

router.get("/servientrega", (req, res) => {
  const empresa = new Empresas();
  res.json(empresa.Servientrega());
});

module.exports = router;

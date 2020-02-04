const FedexModel = require('./fedex');

const fedexModel = new FedexModel();
const CorreosEcuadorModel = require('./correosEcuador');
const correosEcuadorModel = new CorreosEcuadorModel();
const ServientregaModel = require('./servientrega');
const servientregaModel = new ServientregaModel();

class Envio {
  constructor() {
    this.fedexModel = fedexModel;
    this.correosEcuadorModel = correosEcuadorModel;
    this.servientregaModel = servientregaModel;
  };

  setEmpresaFedex(param) {
    const test = param
    console.log(test)
    return fedexModel;
  }

  setEmpresaCorreosEcuador() {
    return this.correosEcuadorModel;
  }

  setEmpresaServientrega() {
    return this.servientregaModel;
  }
}

module.exports = Envio;

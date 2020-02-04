const Envio = require('./envio');

class Empresas {
  Fedex() {
    const envio = new Envio();
    envio.setEmpresaFedex().data();
  }

  CorreoEcuador() {
    const envio = new Envio();
    envio.setEmpresaCorreosEcuador().data();
  }

  Servientrega() {
    const envio = new Envio();
    envio.setEmpresaServientrega().data();
  }
}

module.exports = Empresas;

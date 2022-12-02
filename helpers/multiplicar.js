const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 1, listado = false, hasta = 10) => {
  let resultado = "";
  let consola = "";

  for (let i = 1; i <= hasta; i++) {
    resultado += `${base} x ${i} = ${base * i}\n`;
    consola += `${colors.blue(base)} ${"x".green} ${i} ${
      "=".green
    } ${colors.yellow(base * i)}\n`;
  }

  try {
    fs.writeFileSync(`./salida/Tabla del ${base}.txt`, resultado);
  } catch (err) {
    throw err;
  }

  if (listado) {
    console.log("===============".green);
    console.log("  Tabla del".green, colors.blue(base));
    console.log("===============".green);
    console.log(consola);
  }

  return `Tabla del ${base}.txt`;
};

module.exports = {
  crearArchivo,
};

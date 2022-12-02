const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./yargs/yargs");
const colors = require("colors");

console.clear();

const base = argv.base;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.blue, "creada"))
  .catch((err) => console.log(err));

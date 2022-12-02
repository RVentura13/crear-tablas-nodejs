const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base para multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Indica el limite de la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base debe de ser un número";
    }
    return true;
  }).argv;

module.exports = argv;

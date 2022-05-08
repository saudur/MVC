const command = process.argv.slice(2);
const Controller = require("./controllers/controller");

switch (command[0]) {
  case "help":
    Controller.Help();
    break;
  case "findAll":
    Controller.findAll();
    break;
  case "create":
    let nama = command[1];
    let description = command[2];
    let origin = command[3];
    Controller.create(nama, description, origin);
    break;
  case "delete":
    Controller.delete(command[1]);
    break;
  default:
    console.log(`Gagal`);
    break;
}

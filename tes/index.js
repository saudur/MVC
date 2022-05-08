const command = process.argv.slice(2);
const fs = require("fs");
let foods = JSON.parse(fs.readFileSync("foods.json", "utf-8"));

switch (command[0]) {
  case "help":
    console.log(`
    [findAll] : Menampilkan semua data food,
    [create] [name] [description] [origin] :menambah food baru
    `);
    break;
  case "findAll":
    console.log(foods);
    break;
  case "create":
    let nama = command[1];
    let description = command[2];
    let origin = command[3];
    foods.push({
      id: foods[foods.length - 1].id + 1,
      nama,
      description,
      origin,
    });
    fs.writeFileSync("foods.json", JSON.stringify(foods, null,2));
    console.log(foods);
    break;
  default:
    console.log(`Gagal`);
    break;
}

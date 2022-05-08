const command = process.argv.slice(2);
const fs = require("fs");

class Food {
  constructor(id, nama, deskripsi, origin) {
    this.id = id;
    this.nama = nama;
    this.deskripsi = deskripsi;
    this.origin = origin;
  }

  static read() {
    let foods = JSON.parse(fs.readFileSync("foods.json", "utf-8"));
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      result.push(new Food(foods[i].id, foods[i].nama, foods[i].deskripsi, foods[i].origin));
    }
    return result;
  }

  static findAll() {
    let foods = Food.read();
    return foods;
  }

  static create(nama, deskripsi, origin) {
    let foods = Food.read();
    let newId = foods[foods.length - 1].id + 1;
    foods.push(new Food(newId, nama, deskripsi, origin));
    fs.writeFileSync("foods.json", JSON.stringify(foods, null, 2));
    return {
      nama,
    };
  }
}

switch (command[0]) {
  case "help":
    console.log(`
    [findAll] : Menampilkan semua data food,
    [create] [name] [description] [origin] :menambah food baru
    `);
    break;
  case "findAll":
    console.log(Food.findAll());
    break;
  case "create":
    let nama = command[1];
    let description = command[2];
    let origin = command[3];
    let foods = Food.create(nama, description, origin);
    console.log(`${foods.nama}`);

    break;
  default:
    console.log(`Gagal`);
    break;
}

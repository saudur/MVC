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
    Food.save(foods);
    return {
      nama,
    };
  }

  static save(foods) {
    fs.writeFileSync("foods.json", JSON.stringify(foods, null, 2));
  }

  static delete(id) {
    let foods = Food.read();
    let result = [];
    for (let i = 0; i < foods.length; i++) {
      if (foods[i].id != id) result.push(foods[i]);
    }
    Food.save(result);
  }
}

module.exports = Food;

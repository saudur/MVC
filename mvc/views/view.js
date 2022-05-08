class View {
  static showHelp() {
    console.log(`
    [findAll] : Menampilkan semua data food,
    [create] [name] [description] [origin] :menambah food baru
    `);
  }

  static showAll(foods) {
    console.table(foods);
  }

  static createSuccess(foods) {
    console.log(`${foods.nama} berhasil di tambahkan`);
  }

  static successDelete(id) {
    console.log(`Food with id ${id} is successfuly deleted`);
  }
}

module.exports = View;

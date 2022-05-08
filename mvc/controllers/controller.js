const View = require("../views/view");
const Model = require("../models/model");
class Controller {
  static Help() {
    View.showHelp();
  }
  static findAll() {
    let Model = Model.findAll();
    View.showAll(foods);
  }

  static create(nama, description, origin) {
    let foods = Model.create(nama, description, origin);
    View.createSuccess(foods);
  }

  static delete(id) {
    Model.delete(id);
    View.successDelete(id);
  }
}

module.exports = Controller;

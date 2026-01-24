const db = require("../config/database");

class ExpenseModel {
  static getAll(callback) {
    db.all("SELECT * FROM expenses", [], (err, rows) => {
      callback(err, rows);
    });
  }

  static add(title, amount, callback) {
    db.run(
      "INSERT INTO expenses (title, amount) VALUES (?, ?)",
      [title, amount],
      callback
    );
  }
}

module.exports = ExpenseModel;


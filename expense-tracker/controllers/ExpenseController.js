const ExpenseModel = require("../models/ExpenseModel");

class ExpenseController {
  static getExpenses(req, res) {
    ExpenseModel.getAll((err, expenses) => {
      if (err) return res.status(500).json(err);
      res.json(expenses);
    });
  }

  static addExpense(req, res) {
    const { title, amount } = req.body;

    ExpenseModel.add(title, amount, (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "Expense added" });
    });
  }
}

module.exports = ExpenseController;


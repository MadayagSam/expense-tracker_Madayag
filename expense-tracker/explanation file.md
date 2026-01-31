
// /controllers/ExpenseController.js
class ExpenseController {
  constructor(repository) {
    this.repository = repository;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(expenses) {
    this.observers.forEach(observer => observer.update(expenses));
  }

  addExpense(expense) {
    this.repository.addExpense(expense);
    const expenses = this.repository.getAllExpenses();
    this.notify(expenses);
  }
}

module.exports = ExpenseController;

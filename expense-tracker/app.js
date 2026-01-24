const express = require("express");
const path = require("path");
const ExpenseController = require("./controllers/ExpenseController");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.get("/api/expenses", ExpenseController.getExpenses);
app.post("/api/expenses", ExpenseController.addExpense);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


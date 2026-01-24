const form = document.getElementById("expense-form");
const list = document.getElementById("expense-list");

function loadExpenses() {
  fetch("/api/expenses")
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(e => {
        const li = document.createElement("li");
        li.textContent = `${e.title} - $${e.amount}`;
        list.appendChild(li);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      amount: amount.value
    })
  }).then(() => {
    form.reset();
    loadExpenses();
  });
});

loadExpenses();


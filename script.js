var Modal = {
  open() {
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  }
};

var transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "06/02/2021"
  },

  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "06/02/2021"
  },

  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "06/02/2021"
  },

  {
    id: 4,
    description: "App",
    amount: 200000,
    date: "06/02/2021"
  }
];

var Transaction = {
  incomes() {},
  expenses() {},
  total() {}
};

var Utils = {
  formatCurrency(value) {
    var signal = Number(value) < 0 ? "-" : "";

    console.log(signal);
  }
};

var DOM = {
  transactionsContainer: document.querySelector(".data-table tbody"),

  addTransaction(transaction, index) {
    var tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    var CSSclass = transaction.amount > 0 ? "income" : "expense";

    var amount = Utils.formatCurrency(transaction.amount);

    var html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td><i class="material-icons saida">remove_circle_outline</i></td>
        `;

    return html;
  }
};

transactions.forEach(function(transaction) {
  DOM.addTransaction(transaction);
});

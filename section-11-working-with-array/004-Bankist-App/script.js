"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
// TEST user
const test = {
  owner: "",
  movements: [430, 1000, -700, 50, -90],
  interestRate: 1,
  pin: 0,
};

const accounts = [account1, account2, account3, account4, test];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (movements) {
  //   console.log(movements);
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  //   console.log(incomes);
  // setting incomes to labelIncome
  labelSumIn.textContent = `${incomes}€`;

  const withdrwl = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(withdrwl)}€`;

  // show the interest
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interest) / 100)
    .filter((interest, i, arr) => interest >= 1) //bank will give interest >= 1
    .reduce((acc, int) => acc + int, 0);
  //   console.log(interest);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (acc) {
  // acc is the array containing our object list
  acc.forEach((account) => {
    // console.log(account);
    // we want stw as username
    const username = account.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
    //   account is the individual object, creating a property called username on object account
    account.username = username;
  });
};

createUsernames(accounts);

// Event listeners
let currentAccount;
btnLogin.addEventListener("click", function (event) {
  // Prevent form from submitting
  event.preventDefault();
  //   console.log(event);
  //   console.log(inputLoginUsername.value);
  //   console.log(inputLoginPin.value);
  currentAccount = accounts.find(function (acc) {
    // console.log(acc);

    return acc.username === inputLoginUsername.value;
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    const userName = currentAccount.owner.split(" ")[0];

    // Display UI and message
    labelWelcome.textContent = `Welcome Back, ${userName}`;
    containerApp.style.opacity = 1;

    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);

    // Display summary
    calcDisplaySummary(currentAccount);
  }

  // Clear the username and pin
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur();
});

btnTransfer.addEventListener("click", function (event) {
  // prevent default - page reload doesn't occur while submitting
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferTo = inputTransferTo.value;

  //   search on accounts array
  const account = accounts.find(function (account) {
    return account.username === transferTo;
  });

  //   console.log(account);
  if (account !== undefined) {
    account.movements.push(amount);
    console.log(
      `Money trasfer to ${transferTo} of amount ${amount} is success!!`,
    );
  } else
    console.log("Wrong transferto name, make sure entering correct username!!");
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

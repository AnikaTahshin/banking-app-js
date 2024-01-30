class Account {
  constructor(name, number, type, creation_date, balance) {
    this.name = name;
    this.number = number;
    this.type = this.convertType(type);
    this.creation_date = creation_date;
    this.balance = balance;
  }

  convertType(type) {
    if (type === 1) {
      return "salary";
    } else if (type === 2) {
      return "current";
    } else if (type === 3) {
      return "savings";
    } else {
      return "Enter a valid type";
    }
  }

  display() {
    console.log(`Account Information - Name: ${this.name}, Number: ${this.number}, Type: ${this.type}, Balance: ${this.balance}, Created at: ${this.creation_date}`);
  }
}

const prompt = require("prompt-sync")({ sigint: true });

const bankArr = [];

// create bank account
function createBankAccount() {
  const creationDate = prompt("Enter Date: ");
  const name = prompt("Enter Account Holder's Name: ");
  const number = prompt("Enter Account Number: ");
  const type = parseInt(prompt("Enter Account Type (1 for salary, 2 for current, 3 for saving): "));
  const balance = parseFloat(prompt("Enter Initial Balance: "));
  const acc = new Account(name, number, type, creationDate, balance);
  let minBalance = null;
  if (type === 1) {
    minBalance = 200;
  } else if (type === 2) {
    minBalance = 500;
  } else if (type === 3) {
    minBalance = 1000;
  }

  if (balance >= minBalance) {
    bankArr.push(acc);
    console.log("Account Created Successfully!");
  } else {
    console.log(`Balance should be at least ${minBalance} for ${acc.type} account`);
  }
}

// show all accounts 
function displayAccount() {
  bankArr.forEach((element) => element.display());
}

function main() {
  while (true) {
    console.log("\nBanking Application Menu:");
    console.log("1. Create a new account");
    console.log("2. Display all accounts");
    console.log("3. Update an account");
    console.log("4. Delete an account");
    console.log("5. Deposit an amount into your account");
    console.log("6. Withdraw an amount from your account");
    console.log("7. Search for an account");
    console.log("8. Exit");

    const choice = parseInt(prompt("Enter your choice (1-8):"));
    console.log('check input', choice)
    if (choice === 1) {
      createBankAccount();
    } else if (choice === 2) {
      displayAccount();
    }
    
  }
}

main();

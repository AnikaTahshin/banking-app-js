

class Account {
  constructor(name, number, type, creation_date, balance) {
    this.name = name;
    this.number = number;
    this.type = this.convertType(type);
    this.creation_date = creation_date;
    this.balance = balance;
  }


  // taking number input for different type of accounts
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

  // display the account information
  display() {
    console.log(`Account Information - Name: ${this.name}, Number: ${this.number}, Type: ${this.type}, Balance: ${this.balance}, Created at: ${this.creation_date}`);
  }

  // deposite amount to an account
  deposit(amount){
    this.balance += amount
    console.log(`Successfully Desposite BDT. ${amount} . New balance: ${this.balance}`);
  }


  // withdraw amount
  withdraw(amount) {
    let minBalance;
    if(this.type === 'salary') {
      minBalance = 200;
    }
    else if (this.type === 'current') {
      minBalance = 500;
    }
    else if (this.type === 'savings') {
      minBalance = 1000;
    }
   
    if (minBalance !== null && (this.balance - amount) < minBalance) {
      console.log(`Insufficient funds! Please keep minimum BDT. ${minBalance} for ${this.type} acount`);
    } else {
      this.balance -= amount;
    console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
    }
    
  
  }
}

const prompt = require("prompt-sync")({ sigint: true }); // to take user input

const bankArr = []; // to store all the created accounts

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

  if (balance >= minBalance) { // balance shoudle be equal or greater than minBalance to create an account
    bankArr.push(acc);
    console.log("Account Created Successfully!");
  } else {
    console.log(`Balance should be at least ${minBalance} for ${acc.type} account`);
  }
}



// update account 
function updateAccount() {
  const number = prompt("Enter account number to update:");
  const account = bankArr.find((acc) => acc.number === number);
  if (account) {
    const newName = prompt("Enter new name:");
    account.name = newName;
    console.log("Account updated successfully!");
  } else {
    console.log("Account not found!");
  }
}


// delete an account 



function deleteAccount() {
  const number = prompt("Enter account number to delete:");
  const index = bankArr.findIndex((acc) => acc.number === number);
  if (index !== -1) {
    bankArr.splice(index, 1);
    console.log("Account deleted successfully!");
  } else {
    console.log("Account not found!");
  }
}

// show all accounts 
function displayAccount() {
  if (bankArr.length === 0) { // if the array of account length is 0
   return "No Account found"
    
  }
  else{
    bankArr.forEach((element) => element.display());
  }
    
}


// search for an account 

function searchAccount() {
  const number = prompt("Enter account number: ");
  const account = bankArr.find((acc) => acc.number === number);
  if (account) {
    account.display();
  } else {
    console.log("Account not found!");
  }
}


// deposite amount to an soecific account
function depositeAmount() {
  const number = prompt("Enter account number: ");
  const account = bankArr.find((acc) => acc.number === number); // find entered account number
  if (account) {
    const amount = parseFloat(prompt("Enter amount to deposit:"));
    account.deposit(amount);
  }
  else{
    console.log("Account not found!");
  }
}

// withdraw mount
function withdrawAmount() {
  const number = prompt("Enter account number to withdraw from:");
  const account = bankArr.find((acc) => acc.number === number);
  if (account) {
    const amount = parseFloat(prompt("Enter amount to withdraw:"));
    account.withdraw(amount);
  } else {
    console.log("Account not found!");
  }
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
    
    if (choice === 1) {
      createBankAccount();
    } else if (choice === 2) {
      displayAccount();
    }
    else if (choice === 3) {
      updateAccount();
    }

    
    else if (choice === 4) {
      deleteAccount()
    }
    else if (choice === 5) {
      depositeAmount()
    }
    else if (choice === 6) {
      withdrawAmount()
    }
    
    else if (choice === 7) {
      searchAccount()
    }
    else if (choice === 8) {
     break
    }
    else{
      console.log("Invalid choice. Please enter a number between 1 and 8.");
    }
  }
}

main();

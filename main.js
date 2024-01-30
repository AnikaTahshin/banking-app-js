class Account {
  constructor(name, number,type , creation_date, balance = 0) {
    this.name = name;
    this.number = number;
    this.type = type;
    this.creation_date = creation_date;
    this.balance = balance;
  }
}
const prompt = require("prompt-sync")({ sigint: true });

const bankArr = [];

function createBankAccount() {

  const creationDate = prompt("Enter Date: ");
  const name = prompt("Enter Account Holder's Name: ");
  const number = prompt("Enter Account Number: ");
  const type = prompt("Enter Account Type: ");
  const acc = new Account(name, number, type, creationDate);
  bankArr.push(acc);
  console.log("Account Created Successfully!")
}

function main() {
    createBankAccount()
}
main()

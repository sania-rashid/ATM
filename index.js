#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 60000;
let myPin = 8787;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin)
    console.log("Correct pin code!");
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        message: "Please choose one option",
        type: "list",
        choices: ["Cash Withdrawls", "Transfer of funds", "Balance Inquiry"],
    },
]);
if (operationAnswer.operation === "Cash Withdrawls") { }
let amountAnswer = await inquirer.prompt([{ name: "amount", message: "Enter the Withdrawl amount", type: "number" }]);
if (amountAnswer.amount > myBalance) {
    console.log("Insufficient Balance.");
}
else {
    myBalance -= amountAnswer.amount;
    console.log("Your remaining balance is:" + myBalance);
}
if (operationAnswer.operation === "Transfer of funds") {
    console.log("Transfer of funds functionality coming soon...");
}
else if (operationAnswer.operation === "Balance Inquiry") {
    console.log("Your current balance is:" + myBalance);
}
else {
    console.log("Incorrect pin number");
}

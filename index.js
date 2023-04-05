import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import { sum, subtract, multiply, division } from "./operation.js";
console.log(chalk.bgYellowBright(`Author: Muhammad Aamir Azhar`));
const welcome = async () => {
    console.log(figlet.textSync("Calculator"));
    const input = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter your first number",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your second number",
        },
        {
            name: "operation",
            type: "list",
            message: "Choose operation",
            choices: ["Add(+)", "Subtract(-)", "Multiply(*)", "Division(/)"],
        },
    ]);
    if (input.operation === "Add(+)") {
        const result = sum(input.num1, input.num2);
        console.log(chalk.bgCyan(`Your result:`, `${result}`));
    }
    else if (input.operation === "Subtract(-)") {
        const result = subtract(input.num1, input.num2);
        console.log(chalk.bgCyan(`Your result:`, `${result}`));
    }
    else if (input.operation === "Multiply(*)") {
        const result = multiply(input.num1, input.num2);
        console.log(chalk.bgCyan(`Your result:`, `${result}`));
    }
    else if (input.operation === "Division(/)") {
        const result = division(input.num1, input.num2);
        console.log(chalk.bgCyan(`Your result:`, `${result}`));
    }
    else {
        console.log("Invalid operation");
    }
};
await welcome();

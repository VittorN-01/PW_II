import chalk from "chalk";
import inquirer from "inquirer";

var texto = "Saiba se você é maior que o messi"
console.log(chalk.black.bgWhite(texto))


inquirer 
    .prompt([
        {
        message: "Digite sua altura (em metros):",
        name: "altura"
        }
    ])
    .then((answers) => {
        const resp = Conta(answers.altura, answers.messi)

        if( resp < 0){
            console.log(chalk.bold.bgRed("Você é menor que o Messi!"))
        }else if (resp == 0 ) {
            console.log(chalk.bold.bgBlue("Você tem a mesma altura que o Messi!"))
        }
        else {
            console.log(chalk.bold.bgGreen ("Você é maior que o Messi"))
        }
    })
    function Conta(altura){
        const messi = 1.70
        altura = altura
        return altura - messi
    }
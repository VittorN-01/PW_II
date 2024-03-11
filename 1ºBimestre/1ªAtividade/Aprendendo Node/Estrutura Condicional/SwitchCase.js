import chalk from "chalk"
import inquirer from "inquirer"


var texto = "Veja o dia de Restição, de acordo com a Placa de seu Carro"

console.log(chalk.black.bgWhite(texto))

inquirer
    .prompt([
        {
            message:"Digite o último dígito de sua placa:",
            name: "pl",
        }
    ])
    .then((answers) => {
        switch (answers["pl"]){
            case "1":
            case "2":
                console.log(chalk.bgRed("Dia de Restição: "+(chalk.bold.underline("Segunda-Feira"))))
                break;
            case "3":
            case "4":
                console.log(chalk.bgRed("Dia de Restição: "+(chalk.bold.underline("Terça-Feira"))))
                break;
            case "5":
            case "6":
                console.log(chalk.bgRed("Dia de Restição: "+(chalk.bold.underline("Quarta-Feira"))))
                break;
            case "7":
            case "8":
                console.log(chalk.bgRed("Dia de Restição: "+(chalk.bold.underline("Quinta-Feira"))))
                break;
            case "9":
            case "0":
                console.log(chalk.bgRed("Dia de Restição: "+(chalk.bold.underline("Sexta-Feira"))))
                break;
            default:
                console.log(chalk.red.bold("Placa Inválida"))
        }
    });
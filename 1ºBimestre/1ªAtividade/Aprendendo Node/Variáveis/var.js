import chalk from "chalk"
import inquirer from "inquirer"

var texto = "Mini Cadastro"

console.log(chalk.black.bgWhite(texto))

var nome

inquirer
    .prompt([
        {
            message: "Digite seu nome:",
            name: "n"
        }
    ])
    .then((answers) => {
        const nome = Dado(answers.n)

        console.log(chalk.white("Seja Bem-Vindo(a), " + nome + ", seu Cadastro foi finalizado!"))
    })

    function Dado(n){
        nome = n 
        return nome
    }

     // Finalizado e testado //
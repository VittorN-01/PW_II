import chalk from "chalk"
import inquirer from "inquirer"

var texto = "Mini Cadastro 2"

console.log(chalk.black.bgWhite(texto))

inquirer
    .prompt([
        {
            message: "Digite seu nome:",
            name: "n"
        }
    ])
    .then((answers) => {
        const nome = Dado(answers.n)

        console.log(chalk.white("Seja Bem-Vindo, " + nome + ", seu Cadastro foi finalizado!"))
    })

    function Dado(n){
        let nome = n 
        return nome
    }

    // Finalizado e testado //
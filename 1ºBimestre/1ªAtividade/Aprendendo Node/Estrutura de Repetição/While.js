import chalk from "chalk"
import inquirer from "inquirer"


var texto = "Veja o Fatorial de qualquer número"

console.log(chalk.black.bgWhite(texto))

// Atividade
inquirer
    .prompt([
        {
            message: "Digite um número:",
            name: "num",
        }
    ])
    .then((answers) => {
        const resp = Fatorial(answers.num);
            console.log(chalk.blue(resp));
    });

    function Fatorial(num){
        let i = num;

        //Laço de Repetição !!!
        while(num > 1){
            i = i * (num - 1);
            num = num - 1;
        }
        return i
    }
    
    // Finalizado e testado //
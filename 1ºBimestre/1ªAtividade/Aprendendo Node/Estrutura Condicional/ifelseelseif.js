import chalk from "chalk";
import inquirer from "inquirer";


var texto = "Veja se passou de Ano ou não"

console.log(chalk.black.bgWhite(texto))

//atividade
inquirer
    .prompt([
        {
            message: "Digite sua 1ª nota:",
            name: "nota1"
        },
        {
            message: "Digite sua 2ª nota:",
            name: "nota2"
        },
        {
            message: "Digite sua 3ª nota:",
            name: "nota3"
        },
        {
            message: "Digite sua 4ª nota:",
            name: "nota4"
        }
    ])
    .then((answers) => {
        const nota1 = Number(answers["nota1"]);
        const nota2 = Number(answers["nota2"]);
        const nota3 = Number(answers["nota3"]);
        const nota4 = Number(answers["nota4"]);

        const media = Media(nota1, nota2, nota3, nota4);


        if (media <= 5) {
            console.log(chalk.red.bold("sua media é " + media + " Reprovou!"));
        }else if( media <= 7){
            console.log(chalk.yellow.bold("sua media é " + media + " Passou mas pode melhorar!"));
        }else {
            console.log(chalk.green.bold("sua media é " +media+ " Passou com folga! :D"));
        }
    })


    function Media( nota1, nota2, nota3, nota4) {
        let total = nota1 + nota2 + nota3 + nota4 
        let vdivisao = 4
        return total / vdivisao
    }

    // Finalizado e testado //
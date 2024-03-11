import chalk from "chalk";
import inquirer from "inquirer";


var texto = "Escreva um numero positivo" 

console.log(chalk.bgRed(texto))

//atividade
inquirer
    .prompt([
        {
            message: "Digite o numero:",
            name: "nmr",
        }
    ])
    .then((answers) => {
        const numero = Correto(answers.nmr);
        
        //estrurura if
        if(numero <= 0){
            console.log(chalk.red("Erro: Digite um número POSITIVO!"))
        }else{
            console.log(chalk.green("Parabéns, "+numero+" é Positivo"))
        }
    })
        function Correto(nmr){
            return nmr;
        }

// Finalizado e testado// 
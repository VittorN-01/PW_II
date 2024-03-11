import chalk from "chalk";
import inquirer from "inquirer";
// Importando o Resultado da Média
import Notas from "./calcularNota.js";


var texto = "Veja a média de um Aluno"
console.log(chalk.black.bgWhite(texto))

inquirer
    .prompt([
        {
            message: "Digite a 1ª nota do Aluno:",
            name:"n1",
        },
        {
            message: "Digite a 2ª nota do Aluno:",
            name:"n2",
        },
        {
            message: "Digite a 3ª nota do Aluno:",
            name:"n3"
        },
        {
            message: "Digite a 4ª nota do Aluno:",
            name:"n4",
        }
    ])

    .then((answers) => {
        const notas = Notas(answers.n1, answers.n2, answers.n3, answers.n4);
        if(notas >= 6){
            console.log(chalk.black.bgGreen("Média: "+ notas+", Passou de Ano"))
        }else if(notas == 5){
            console.log(chalk.black.bgYellow("Média: "+ notas+", Recuperação"))
        }else{
            console.log(chalk.black.bgRed("Média: "+ notas+", Reprovado !!"))
        }
      });
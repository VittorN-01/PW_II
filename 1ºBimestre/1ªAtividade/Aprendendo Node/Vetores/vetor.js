import chalk from "chalk";
import inquirer from "inquirer";

var texto = "Tabuada"
console.log(chalk.black.bgWhite(texto))

inquirer
  .prompt([
    {
      message: "Digite um número:",
      name: "num",
    },
  ])
  .then((answers) => {
    const r = Tabuada(answers.num);
    console.log(chalk.bgBlue(r));
  });

function Tabuada(num) {
  var array = []
  for (let i = 0; i < 11; i++) {
      array [i] = num * i;
  }
  return array
}

// Finalizado e testado //
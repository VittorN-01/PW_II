import chalk from "chalk";
import inquirer from "inquirer";

const texto = "Potenciação";

console.log(chalk.black.bgWhite(texto));

inquirer
  .prompt([
    {
      message: "Coloque a base:",
      name: "base",
    },
    {
      message: "Coloque o expoente:",
      name: "expoente",
    },
  ])
  .then((answers) => {
    const pot = Potencia(answers.base, answers.expoente);
    console.log(chalk.blue(pot));
  });

function Potencia(base, expoente) {
  let p = 1;

  for (let i = 1; i <= expoente; i++) {
    p *= base;
  }

  return p;
}
 // Finalizado e testado // 
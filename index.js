#!usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

console.log(chalk.bgGreen("yoo"));

let playername;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const welcome = async () => {
  const title = chalkAnimation.rainbow("Yoo! I hope ya brought pizza");

  await sleep();
  title.stop();

  console.log(`
  Yoo! \n
  ${chalk.bgGreen("are ya kiding me")}
  `);
};

await welcome();

const askName = async () => {
  const answer = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "yoo! what's ur name lil boi",

    default() {
      return "Player";
    },
  });

  playername = answer.player_name
};


await askName()
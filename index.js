#!usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner"

console.log(chalk.bgGreen("yoo"));

let playerName;

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

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

const askName = async () => {
  const answer = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "yoo! what's ur name lil boi",

    default() {
      return "Player";
    },
  });

  playerName = answer.player_name;
};

await askName();

const question1 = async () => {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "yoo! wots up \n",
    choices: ["im fine, wbu", "sutup", "no u"],
  });

  return handleAnswer(answers.question_1 == "no u")
};

await question1()
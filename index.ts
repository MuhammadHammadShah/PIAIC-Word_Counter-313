import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

figlet("Word Counter", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.green(data));
});

async function askQuestion() {
  const question = await inquirer.prompt([
    {
      name: "paragraph",
      type: "input",
      message: "Enter your paragraph you want to count the words:",
    },
  ]);
  return question.paragraph;
}

async function countWords() {
  const paragraph = await askQuestion();
  const arrayOfWords = paragraph.split(" ");
  const wordCount = arrayOfWords.length;

  console.log(`Word Count: ${wordCount}`);
}

countWords();

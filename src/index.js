import readline from "readline";
import { homedir } from "os";

import { getUserName } from "./utils/getUserName.js";
import { commandsListener } from "./utils/commands.js";

const finish = (rl) => {
  const userName = getUserName();
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  rl.close();
};

const init = async () => {
  const userName = getUserName();
  process.chdir(homedir());

  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${process.cwd()}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", async (data) => {
    if (data === ".exit") {
      finish(rl);
      return;
    }

    const [command, ...args] = data.split(" ");
    // console.log(`You are currently in ${process.cwd()}`);
    await commandsListener(command, args);
  });

  rl.on("SIGINT", () => {
    finish(rl);
  });
};

init();

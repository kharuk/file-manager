import * as os from "os";

function printEOL() {
  console.log("End-Of-Line (EOL):", os.EOL);
}

function printCPUsInfo() {
  const cpus = os.cpus();

  console.log("CPUs Info:");
  console.log("Total CPUs:", cpus.length);

  cpus.forEach((cpu, index) => {
    console.log(`CPU ${index + 1}:`);
    console.log("Model:", cpu.model);
    console.log("Speed:", (cpu.speed / 1000).toFixed(2), "GHz");
  });
}

function printHomeDir() {
  console.log("Home Directory:", os.homedir());
}

function printUsername() {
  console.log("Current System User:", os.userInfo().username);
}

function printArchitecture() {
  console.log("CPU Architecture:", os.arch());
}

export const osCommands = (command) => {
  switch (command) {
    case "--EOL":
      printEOL();
      break;
    case "--cpus":
      printCPUsInfo();
      break;
    case "--homedir":
      printHomeDir();
      break;
    case "--username":
      printUsername();
      break;
    case "--architecture":
      printArchitecture();
      break;
    default:
      console.log("Invalid command");
      break;
  }
};

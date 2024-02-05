import { list } from "../commands/navigation/list.js";
import { up } from "../commands/navigation/up.js";
import { cd } from "../commands/navigation/cd.js";
import { cat } from "../commands/files/cat.js";
import { add } from "../commands/files/add.js";
import { rename } from "../commands/files/rename.js";
import { copy } from "../commands/files/copy.js";
import { move } from "../commands/files/move.js";
import { remove } from "../commands/files/remove.js";
import { osCommands } from "../commands/os.js";
import { calculateHash } from "../commands/hash.js";
import { compress } from "../commands/compress.js";
import { decompress } from "../commands/decompress.js";

export const commandsListener = async (command, args) => {
  switch (command) {
    case "up":
      await up();
      break;
    case "cd":
      if (!args.length) {
        console.log("Invalid input");
        break;
      }
      await cd(args[0]);
      break;
    case "ls":
      await list();
      break;
    case "cat":
      if (!args.length) {
        console.log(`Invalid input`);
        break;
      }
      await cat(args[0]);
      break;
    case "add":
      if (!args.length) {
        console.log(`Invalid input`);
        break;
      }
      await add(args[0]);
      break;
    case "rn":
      if (args.length < 2) {
        console.log(`Invalid input`);
        break;
      }
      await rename(args[0], args[1]);
      break;
    case "cp":
      if (args.length < 2) {
        console.log(`Invalid input`);
        break;
      }
      await copy(args[0], args[1]);
      break;
    case "mv":
      if (args.length < 2) {
        console.log(`Invalid input`);
        break;
      }
      await move(args[0], args[1]);
      break;
    case "rm":
      if (!args.length) {
        console.log(`Invalid input`);
        break;
      }
      await remove(args[0]);
      break;
    case "os":
      if (!args.length) {
        console.log(`Invalid input`);
        break;
      }
      await osCommands(args[0]);
      break;
    case "hash":
      if (!args.length) {
        console.log(`Invalid input.`);
        break;
      }
      await calculateHash(args[0]);
      break;
    case "compress":
      if (args.length < 2) {
        console.log(`Invalid input`);
        break;
      }
      await compress(args[0], args[1]);
      break;
    case "decompress":
      if (args.length < 2) {
        console.log(`Invalid input`);
        break;
      }
      await decompress(args[0], args[1]);
      break;
    default:
      console.log(`Invalid input`);
      break;
  }
  console.log(process.cwd());
};

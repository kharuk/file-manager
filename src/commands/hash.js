import { createReadStream } from "fs";
import { resolve } from "path";
import { createHash } from "crypto";
import { stdout } from "process";

import { checkIfFileExists } from "../utils/fileExists.js";

export const calculateHash = async (filePath) => {
  try {
    const currentDirectory = process.cwd();
    const fileFullPath = resolve(currentDirectory, filePath);

    const fileExists = await checkIfFileExists(fileFullPath);

    if (!fileExists) {
      console.log("File doesn't exists");
      throw new Error();
    }

    const stream = createReadStream(fileFullPath);
    const hash = createHash("sha256");

    stream.pipe(hash).setEncoding("hex").pipe(stdout);
    stdout.on("unpipe", () => console.log(""));

    stream.on("error", (error) => {
      console.log("Operation failed");
    });
  } catch (error) {
    console.log("Operation failed");
  }
};

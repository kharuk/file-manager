import { createReadStream, createWriteStream } from "fs";
import { join, basename, resolve } from "path";
import { checkIfFileExists } from "../../utils/fileExists.js";

export const copy = async (sourcePath, newFolder) => {
  try {
    const currentDirectory = process.cwd();
    const sourceFile = resolve(currentDirectory, sourcePath);
    const destinationFilePath = join(newFolder, basename(sourcePath));

    const fileExists = checkIfFileExists(sourcePath);
    if (!fileExists) {
      console.error(`Source file does not exist.`);
      throw new Error();
    }

    const readableStream = createReadStream(sourceFile);
    const writableStream = createWriteStream(destinationFilePath);
    readableStream.pipe(writableStream);

    readableStream.on("error", (err) => {
      console.log("Operation failed");
      readableStream.close();
    });

    writableStream.on("error", (err) => {
      console.log(err);
      console.log("Operation failed");
      writableStream.close();
    });
  } catch (error) {
    console.log(error);
    console.log("Operation failed");
  }
};

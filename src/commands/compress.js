import { pipeline } from "stream/promises";
import { createBrotliCompress } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { basename, join } from "path";

import { checkIfFileExists } from "../utils/fileExists.js";

export const compress = async (pathToFile, destinationPath) => {
  try {
    const sourceFileExists = await checkIfFileExists(pathToFile);

    if (!sourceFileExists) {
      console.log("File doesn't exists");
      throw new Error();
    }

    const fileName = basename(pathToFile);
    const pathToArchiveFile = join(destinationPath, `${fileName}.br`);

    const destinationFileExists = await checkIfFileExists(pathToArchiveFile);

    if (destinationFileExists) {
      console.log("File already exists");
      throw new Error();
    }

    const readableStream = createReadStream(pathToFile);
    const writableStream = createWriteStream(pathToArchiveFile);

    await pipeline(readableStream, createBrotliCompress(), writableStream);

    writableStream.on("error", (error) => {
      console.log("Operation failed");
    });

    readableStream.on("error", (error) => {
      console.log("Operation failed");
    });
  } catch (error) {
    console.log("Operation failed");
  }
};

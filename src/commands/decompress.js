import { pipeline } from "stream/promises";
import { createBrotliDecompress } from "zlib";
import { createWriteStream, createReadStream } from "fs";
import { checkIfFileExists } from "../utils/fileExists.js";
import { basename, join } from "path";

export const decompress = async (pathToArchiveFile, destinationPath) => {
  try {
    const sourceFileExists = await checkIfFileExists(pathToArchiveFile);

    if (!sourceFileExists) {
      console.log("File doesn't exists");
      throw new Error();
    }

    const fileName = basename(pathToArchiveFile, ".br");
    const pathPathFile = join(destinationPath, fileName);

    const destinationFileExists = await checkIfFileExists(pathPathFile);

    if (destinationFileExists) {
      console.log("File already exists");
      throw new Error();
    }

    const readableStream = createReadStream(pathToArchiveFile);
    const writableStream = createWriteStream(pathPathFile);

    await pipeline(readableStream, createBrotliDecompress(), writableStream);

    writableStream.on("error", (error) => {
      console.log("Operation failed");
    });

    readableStream.on("error", (error) => {
      console.log("Operation failed");
    });
  } catch(error) {
    console.log(error);

    console.log("Operation failed");
  }
};

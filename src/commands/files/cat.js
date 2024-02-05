import { resolve } from "path";
import { createReadStream } from "fs";
import { checkIfFileExists } from "../../utils/fileExists.js";

export const cat = async (path) => {
  try {
    const filePath = resolve(process.cwd(), path);

    const fileExists = await checkIfFileExists(filePath);

    if (!fileExists) {
      console.log("File does not exist.");
      throw new Error();
    }

    const readableStream = createReadStream(filePath);
    readableStream.pipe(process.stdout);

    readableStream.on("error", (err) => {
      console.log("Operation failed");
      readableStream.close();
    });

    readableStream.on("end", () => {
      console.log("\n");
    });
  } catch (error) {
    console.log("Operation failed");
  }
};

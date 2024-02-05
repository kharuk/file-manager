import { resolve } from "path";
import { unlink } from "fs/promises";
import { checkIfFileExists } from "../../utils/fileExists.js";

export const remove = async (path) => {
  try {
    const currentDirectory = process.cwd();
    const filePath = resolve(currentDirectory, path);

    const fileExists = await checkIfFileExists(filePath);

    if (!fileExists) {
      console.error("File does not exist.");
      throw new Error();
    }

    await unlink(filePath);
  } catch (error) {
    console.log("Operation failed");
  }
};

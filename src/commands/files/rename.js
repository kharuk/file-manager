import { rename as renameFile } from "fs/promises";
import { join } from "path";
import { checkIfFileExists } from "../../utils/fileExists.js";

export const rename = async (pathToFile, fileName) => {
  try {
    const currentDirectory = process.cwd();

    const oldFilePath = join(currentDirectory, pathToFile);
    const newFilePath = join(currentDirectory, fileName);

    const oldFileExists = await checkIfFileExists(oldFilePath);

    if (!oldFileExists) {
      console.log("File doesn't exists");
      throw new Error();
    }

    const newFileExists = await checkIfFileExists(newFilePath);

    if (newFileExists) {
      console.log("File already exists");
      throw new Error();
    }

    await renameFile(oldFilePath, newFilePath);
  } catch (error) {
    console.log("Operation failed");
  }
};

import { writeFile } from "fs/promises";
import { resolve } from "path";
import { checkIfFileExists } from "../../utils/fileExists.js";

export const add = async (fileName) => {
  try {
    const currentDirectory = process.cwd();
    const filePath = resolve(currentDirectory, fileName);

    const fileExists = await checkIfFileExists(filePath);

    if (fileExists) {
      console.log("File already exists");
      throw new Error();
    }

    await writeFile(filePath, "", { flag: "wx" });
  } catch (error) {
    console.log("Operation failed");
  }
};

import { resolve } from "path";
import { stat } from "fs/promises";

export const cd = async (pathToDirectory) => {
  try {
    const currentDirectory = process.cwd();
    const targetDirectory = resolve(currentDirectory, pathToDirectory);

    const stats = await stat(targetDirectory);

    if (!stats.isDirectory()) {
      console.log("Doesn't exist");
      throw new Error();
    }

    process.chdir(targetDirectory);
  } catch (error) {
    console.log("Operation failed");
  }
};

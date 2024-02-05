import { copy } from "./copy.js";
import { remove } from "./remove.js";

export const move = async (sourcePath, newFolder) => {
  try {
    await copy(sourcePath, newFolder);
    await remove(sourcePath);
  } catch (error) {
    console.log(error);
    console.log("Operation failed");
  }
};

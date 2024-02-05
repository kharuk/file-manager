import { access } from "fs/promises";

export const checkIfFileExists = (pathToFile) => {
  return access(pathToFile)
    .then(() => true)
    .catch(() => false);
};

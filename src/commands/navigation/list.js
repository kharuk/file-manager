import { readdir } from "fs/promises";

const list = async () => {
  try {
    const currentDir = process.cwd();
    const fileList = await readdir(currentDir, { withFileTypes: true });
    const directories = [];
    const files = [];
    fileList.forEach((file) => {
      if (file.isDirectory()) {
        directories.push({ name: file.name, type: "directory" });
      } else {
        files.push({ name: file.name, type: "file" });
      }
    });

    directories.sort();
    files.sort();

    console.table(directories.concat(files));
  } catch (error) {
    console.log("Operation failed");
  }
};

export { list };

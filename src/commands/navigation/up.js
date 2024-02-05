export const up = () => {
  try {
    const currentDirectory = process.cwd();
    if (currentDirectory === "/") {
      return;
    }

    process.chdir("..");
  } catch (error) {
    console.log("Operation failed");
  }
};

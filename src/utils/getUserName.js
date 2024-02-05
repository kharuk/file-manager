export const getUserName = () => {
  const cliUserName = process.argv
    .slice(2)
    .filter((param) => param.startsWith("--username"));
  return cliUserName[0]?.split("=")[1] ?? "Username";
};

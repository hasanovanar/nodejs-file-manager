export const goodByeUser = () => {
  const args = process.argv.slice(2);
  const usernameArg = args.find((arg) => arg.startsWith("--username="));

  const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

import { currentDirectory } from "./currentDirectory.js";
import os from "os";

export const welcomeUser = () => {
  const args = process.argv.slice(2);
  const usernameArg = args.find((arg) => arg.startsWith("--username="));
  const homeDir = os.homedir();

  const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

  console.log(`Welcome to the File Manager, ${username}!`);
  process.chdir(homeDir);

  currentDirectory();
  process.stdin.resume();
};

import os from "os";
import { currentDirectory } from "./currentDirectory.js";
import { promptUser } from "./promptUser.js";

export const welcomeUser = () => {
  const args = process.argv.slice(2);
  const usernameArg = args.find((arg) => arg.startsWith("--username="));
  const homeDir = os.homedir();

  const username = usernameArg ? usernameArg.split("=")[1] : "Anonymous";

  console.log(`Welcome to the File Manager, ${username}!`);
  process.chdir(homeDir);

  currentDirectory();
  promptUser();
  process.stdin.resume();
};

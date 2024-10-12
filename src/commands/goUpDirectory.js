import { currentDirectory } from "../utils/currentDirectory.js";

export const goUpDirectory = () => {
  process.chdir("..");
  currentDirectory();
};

import { currentDirectory } from "../utils/currentDirectory.js";

export const goToDirectory = (directory) => {
  try {
    process.chdir(directory);
  } catch (error) {
    console.error("Operation failed");
  } finally {
    currentDirectory();
  }
};

import { rm } from "fs/promises";
import { currentDirectory } from "../utils/currentDirectory.js";

export const remove = async (filePath) => {
  try {
    await rm(filePath);
    // currentDirectory();
  } catch (error) {
    console.error("Operation failed");
  } finally {
    currentDirectory();
  }
};

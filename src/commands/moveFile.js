import { rm } from "fs/promises";
import { copyFile } from "./copyFile.js";

export const moveFile = async (args) => {
  const [filePath] = args;
  try {
    await copyFile(args);
    await rm(filePath);
  } catch (error) {}
};

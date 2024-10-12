import { rm } from "fs/promises";
import { copyFile } from "./copyFile.js";

export const moveFile = async (args) => {
  const [filePath] = args;
  await copyFile(args);
  await rm(filePath);
};

// it shows ENOENT error - I need to fix that

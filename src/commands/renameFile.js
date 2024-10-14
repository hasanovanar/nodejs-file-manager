import fs from "fs/promises";
import path from "path";

export const renameFile = async (args) => {
  try {
    const [filePath, newFileName] = args;
    const { dir } = path.parse(filePath);
    const newFilePath = path.join(dir, newFileName);

    await fs.rename(filePath, newFilePath);
  } catch (error) {
    console.error("Operation failed");
  }
};

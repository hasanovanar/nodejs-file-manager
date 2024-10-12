import { writeFile, access } from "fs/promises";
import path from "path";
import { currentDirectory } from "../utils/currentDirectory.js";

export const createFile = async (fileName) => {
  try {
    try {
      await access(fileName);
      throw new Error("Operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
    const filePath = path.join(process.cwd(), fileName);
    await writeFile(filePath, "");
  } catch (error) {
    console.error("Operation failed");
  } finally {
    currentDirectory();
  }
};

import { rm } from "fs/promises";

export const remove = async (filePath) => {
  try {
    await rm(filePath);
  } catch (error) {
    console.error("Operation failed");
  }
};

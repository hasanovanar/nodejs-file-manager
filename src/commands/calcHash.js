import { createHash } from "crypto";
import { readFile } from "fs/promises";

export const calculateHash = async (filePath) => {
  try {
    const fileContent = await readFile(filePath);

    const hash = createHash("sha256").update(fileContent).digest("hex");

    console.log(hash);
  } catch (error) {
    console.error("Operation failed");
  }
};

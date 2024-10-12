import { createReadStream } from "fs";
import { currentDirectory } from "../utils/currentDirectory.js";

export const readFile = async (filePath) => {
  try {
    const stream = createReadStream(filePath, { encoding: "utf-8" });

    stream.pipe(process.stdout);

    stream.on("error", (error) => {
      console.error("Operation failed");
      currentDirectory();
    });
    stream.on("end", () => {
      currentDirectory();
    });
  } catch (error) {
    console.error(error.message);
    currentDirectory();
  }
};

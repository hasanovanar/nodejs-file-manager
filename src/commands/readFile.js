import { createReadStream } from "fs";
import { currentDirectory } from "../utils/currentDirectory.js";
import { promptUser } from "../utils/promptUser.js";

export const readFile = async (filePath) => {
  try {
    const stream = createReadStream(filePath, { encoding: "utf-8" });

    stream.pipe(process.stdout);

    stream.on("error", (error) => {
      console.log("");
      console.error("Operation failed");
      currentDirectory();
      promptUser();
    });

    stream.on("end", () => {
      console.log("");
      currentDirectory();
      promptUser();
    });
  } catch (error) {
    console.error(error.message);
  }
};

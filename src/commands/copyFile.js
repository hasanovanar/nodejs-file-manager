import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import path from "path";
import { currentDirectory } from "../utils/currentDirectory.js";

export const copyFile = async (args) => {
  try {
    const [filePath, newDirectory] = args;
    const { base } = path.parse(filePath);
    const newFilePath = path.join(newDirectory, base);

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(newFilePath);
    await stream.pipeline(readableStream, writableStream);
  } catch (error) {
    console.error("Operation failed");
  } finally {
    currentDirectory();
  }
};

import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import path from "path";
import { access } from "fs/promises";

export const copyFile = async (args) => {
  try {
    const [filePath, newDirectory] = args;
    const { base } = path.parse(filePath);
    const newFilePath = path.join(newDirectory, base);

    await access(filePath);

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(newFilePath);
    await stream.pipeline(readableStream, writableStream);
  } catch (error) {
    console.error("Operation failed");
  }
};

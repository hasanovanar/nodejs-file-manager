import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import path from "path";
import zlib from "zlib";
import { currentDirectory } from "../utils/currentDirectory.js";

export async function decompressFile(args) {
  try {
    const [filePath, destinationDir] = args;
    const { name, ext } = path.parse(filePath);

    if (ext !== ".br") {
      throw new Error(
        "Invalid file type. Only '.br' files can be decompressed."
      );
    }

    const destinationDecompressed = path.join(destinationDir, name);

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destinationDecompressed);
    const brotliDecompressor = zlib.createBrotliDecompress();

    await stream.pipeline(readableStream, brotliDecompressor, writableStream);
  } catch (error) {
    console.error("Operation failed");
  } finally {
    currentDirectory();
  }
}

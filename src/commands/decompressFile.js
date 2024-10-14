import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import path from "path";
import zlib from "zlib";

export async function decompressFile(args) {
  try {
    const [filePath, destinationPath] = args;
    const { ext } = path.parse(filePath);

    if (ext !== ".br") {
      throw new Error("Invalid input");
    }

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destinationPath);
    const brotliDecompressor = zlib.createBrotliDecompress();

    await stream.pipeline(readableStream, brotliDecompressor, writableStream);
  } catch (error) {
    console.error("Operation failed");
  }
}

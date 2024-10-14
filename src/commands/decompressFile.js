import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import zlib from "zlib";
import { access } from "fs/promises";

export async function decompressFile(args) {
  try {
    const [filePath, destinationPath] = args;

    await access(filePath);

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destinationPath);
    const brotliDecompressor = zlib.createBrotliDecompress();

    await stream.pipeline(readableStream, brotliDecompressor, writableStream);
  } catch (error) {
    console.error("Operation failed");
  }
}

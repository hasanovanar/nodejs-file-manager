import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import path from "path";
import zlib from "zlib";

export async function compressFile(args) {
  try {
    const [filePath, destinationDir] = args;
    const { base } = path.parse(filePath);

    const destinationCompressed = path.join(destinationDir, `${base}.br`);

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destinationCompressed);
    const brotliCompressor = zlib.createBrotliCompress();

    await stream.pipeline(readableStream, brotliCompressor, writableStream);
  } catch (error) {
    console.error("Operation failed");
  }
}

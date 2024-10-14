import { createReadStream, createWriteStream } from "fs";
import stream from "stream/promises";
import zlib from "zlib";
import { access } from "fs/promises";

export async function compressFile(args) {
  try {
    const [filePath, destinationPath] = args;

    const destinationCompressed = `${destinationPath}.br`;

    await access(filePath);

    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destinationCompressed);
    const brotliCompressor = zlib.createBrotliCompress();

    await stream.pipeline(readableStream, brotliCompressor, writableStream);
  } catch (error) {
    console.error("Operation failed");
  }
}

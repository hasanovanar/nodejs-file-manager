import { goodByeUser } from "./utils/goodByeUser.js";
import { currentDirectory } from "./utils/currentDirectory.js";
import { goUpDirectory } from "./commands/goUpDirectory.js ";
import { goToDirectory } from "./commands/goToDirectory.js";
import { readFile } from "./commands/readFile.js";
import { createFile } from "./commands/createEmptyFile.js";
import { osOptions } from "./commands/osOptions.js";
import { remove } from "./commands/deleteFile.js";
import { renameFile } from "./commands/renameFile.js";
import { copyFile } from "./commands/copyFile.js";
import { moveFile } from "./commands/moveFile.js";
import { calculateHash } from "./commands/calcHash.js";
import { list } from "./commands/list.js";
import { compressFile } from "./commands/compressFile.js";
import { decompressFile } from "./commands/decompressFile.js";

export const commands = () => {
  const commands = {
    up: goUpDirectory,
    cd: goToDirectory,
    cat: readFile,
    add: createFile,
    os: osOptions,
    rm: remove,
    rn: renameFile,
    cp: copyFile,
    mv: moveFile,
    hash: calculateHash,
    ls: list,
    compress: compressFile,
    decompress: decompressFile,
  };

  process.stdin.on("data", async (input) => {
    const inputString = input.toString().trim();

    const args = inputString
      .match(/"[^"]+"|\S+/g)
      .map((arg) => arg.replace(/"/g, ""));

    const [command, ...restArgs] = args;

    if (command === ".exit") {
      goodByeUser();
      process.exit(0);
    } else if (commands[command]) {
      try {
        if (
          command === "rn" ||
          command === "cp" ||
          command === "mv" ||
          command === "compress" ||
          command === "decompress"
        ) {
          await commands[command](restArgs);
        } else {
          await commands[command](restArgs.join(" "));
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log("Invalid input");
      currentDirectory();
    }
  });

  process.on("SIGINT", () => {
    goodByeUser();
    process.exit(0);
  });
};

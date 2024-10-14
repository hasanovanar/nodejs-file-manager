import { readdir, stat } from "fs/promises";

export const list = async () => {
  try {
    const directoryContents = await readdir(process.cwd());

    const listInfo = await Promise.all(
      directoryContents.map(async (item) => {
        const itemPath = `${process.cwd()}/${item}`;
        const itemStat = await stat(itemPath);

        let type;
        if (itemStat.isFile()) {
          type = "file";
        } else if (itemStat.isDirectory()) {
          type = "directory";
        } else if (itemStat.isSymbolicLink()) {
          type = "symlink";
        } else {
          type = "other";
        }

        return { Name: item, Type: type };
      })
    );

    console.table(listInfo);
  } catch (error) {
    console.error("Operation failed");
  }
};

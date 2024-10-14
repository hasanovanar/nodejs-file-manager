import { readdir, stat } from "fs/promises";

export const list = async () => {
  try {
    const directoryContents = await readdir(process.cwd());

    const listInfo = await Promise.all(
      directoryContents.map(async (item) => {
        const itemPath = `${process.cwd()}/${item}`;
        const itemStat = await stat(itemPath);

        let type;

        if (itemStat.isDirectory()) {
          type = "directory";
        } else {
          type = "file";
        }

        return { Name: item, Type: type };
      })
    );

    listInfo.sort((a, b) => {
      if (a.Type === "directory" && b.Type !== "directory") return -1;
      if (a.Type !== "directory" && b.Type === "directory") return 1;

      return a.Name.localeCompare(b.Name);
    });

    console.table(listInfo);
  } catch (error) {
    console.error("Operation failed");
  }
};

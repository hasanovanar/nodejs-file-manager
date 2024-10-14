import { readdir, stat } from "fs/promises";
import path from "path";

export const list = async () => {
  try {
    // console.log("Current directory:", process.cwd());

    const directoryContents = await readdir(process.cwd());
    // console.log("Directory contents:", directoryContents);

    const listInfo = await Promise.all(
      directoryContents.map(async (item) => {
        const itemPath = path.join(process.cwd(), item);

        try {
          const itemStat = await stat(itemPath);

          let type;
          if (itemStat.isDirectory()) {
            type = "directory";
          } else {
            type = "file";
          }

          return { Name: item, Type: type };
        } catch (statError) {
          // if (statError.code === "EPERM") {
          //   console.warn(`Permission denied for: ${itemPath}`);
          // } else {
          //   console.error("Failed to stat item:", itemPath, statError.message);
          // }
          return null;
        }
      })
    );

    const filteredListInfo = listInfo.filter((item) => item !== null);

    filteredListInfo.sort((a, b) => {
      if (a.Type === "directory" && b.Type !== "directory") return -1;
      if (a.Type !== "directory" && b.Type === "directory") return 1;

      return a.Name.localeCompare(b.Name);
    });

    console.table(filteredListInfo);
  } catch (error) {
    console.error("Operation failed");
  }
};

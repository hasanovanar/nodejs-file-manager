import os from "os";
import { currentDirectory } from "../utils/currentDirectory.js";

export const osOptions = (options) => {
  switch (options) {
    case "--EOL": {
      console.log(`End-of-line: ${JSON.stringify(os.EOL)}`);
      currentDirectory();
      return;
    }
    case "--cpus": {
      const cpus = os.cpus();
      console.log(`Total CPUs: ${cpus.length}`);
      const cpuInfo = cpus.map((cpu) => ({
        Model: cpu.model,
        "Clock rate (GHz)": Number((cpu.speed / 1000).toFixed(2)),
      }));
      console.table(cpuInfo);

      currentDirectory();
      return;
    }

    case "--homedir": {
      console.log(`Home directory: ${os.homedir()}`);
      currentDirectory();
      return;
    }
    case "--username": {
      console.log(`System user name: ${os.userInfo().username}`);
      currentDirectory();
      return;
    }

    case "--architecture": {
      console.log(`CPU architecture: ${process.arch}`);
      currentDirectory();
      return;
    }
    default: {
      console.log("Invalid input");
      currentDirectory();
      return;
    }
  }
};

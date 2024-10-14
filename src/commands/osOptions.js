import os from "os";
// import { currentDirectory } from "../utils/currentDirectory.js";

export const osOptions = (input) => {
  const options = input.trim().split(" ").filter(Boolean);

  const executeOption = (option) => {
    switch (option) {
      case "--EOL": {
        console.log(`End-of-line: ${JSON.stringify(os.EOL)}`);
        break;
      }
      case "--cpus": {
        const cpus = os.cpus();
        console.log(`Total CPUs: ${cpus.length}`);
        const cpuInfo = cpus.map((cpu) => ({
          Model: cpu.model,
          "Clock rate (GHz)": Number((cpu.speed / 1000).toFixed(2)),
        }));
        console.table(cpuInfo);
        break;
      }
      case "--homedir": {
        console.log(`Home directory: ${os.homedir()}`);
        break;
      }
      case "--username": {
        console.log(`System user name: ${os.userInfo().username}`);
        break;
      }
      case "--architecture": {
        console.log(`CPU architecture: ${process.arch}`);
        break;
      }
      default: {
        console.log(`Invalid input`);
        break;
      }
    }
  };

  for (const option of options) {
    executeOption(option);
  }

  // currentDirectory();
};

export const goToDirectory = (directory) => {
  try {
    process.chdir(directory);
  } catch (error) {
    console.error("Operation failed");
  }
};

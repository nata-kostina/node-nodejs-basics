import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const filesDir = path.join(__dirname, "files");
  const sourceFilePath = path.join(filesDir, "wrongFilename.txt");
  const destFilePath = path.join(filesDir, "properFilename.md");

  try {
    await fsPromises.rename(sourceFilePath, destFilePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();

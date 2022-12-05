import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const filesDir = path.join(__dirname, "files");
  const filePath = path.join(filesDir, "fileToRemove.txt");
  try {
    await fsPromises.unlink(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();

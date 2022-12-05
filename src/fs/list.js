import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const filesDir = path.join(__dirname, "files");
  try {
    const files = await fsPromises.readdir(filesDir);
    files.forEach((file) => console.log(file));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();

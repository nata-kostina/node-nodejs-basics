import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filesDir = path.join(__dirname, "files");
  const filePath = path.join(filesDir, "fileToRead.txt");

  try {
    const data = await fsPromises.readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();

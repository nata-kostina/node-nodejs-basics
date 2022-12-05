import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(path.join(__dirname, "files"), "fileToWrite.txt");
  try {
    const writableStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writableStream);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await write();

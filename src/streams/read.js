import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join( path.join(__dirname, "files"), "fileToRead.txt");
  try {
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(process.stdout)
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();

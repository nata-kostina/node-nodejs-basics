import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  try {
    const filesDir = path.join(__dirname, "files");
    const filePath = path.join(filesDir, "fileToCompress.txt");
    const destFilePath = path.join(filesDir, "archive.gz");

    const gzip = zlib.createGzip();
    const r = fs.createReadStream(filePath);
    const w = fs.createWriteStream(destFilePath);
    r.pipe(gzip).pipe(w);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await compress();

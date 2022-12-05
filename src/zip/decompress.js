import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  try {
    const filesDir = path.join(__dirname, "files");
    const zipPath = path.join(filesDir, "archive.gz");
    const destFilePath = path.join(filesDir, "unzippedFile.txt");

    const unzip = zlib.createUnzip();
    const r = fs.createReadStream(zipPath);
    const w = fs.createWriteStream(destFilePath);
    r.pipe(unzip).pipe(w);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await decompress();

import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourceDir = path.join(__dirname, "files");
  const destinationDir = path.join(__dirname, "files_copy");
  try {
    await fsPromises.mkdir(destinationDir);
    const files = await fsPromises.readdir(sourceDir);
    files.forEach((file) => {
      fsPromises.copyFile(
        path.join(sourceDir, file),
        path.join(destinationDir, file)
      );
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

copy();

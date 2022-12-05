import path from "path";
import { fileURLToPath } from "url";
import { promises as fsPromises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.join(path.join(__dirname, "files"), "fresh.txt");
  const data = "I am fresh and young";
  try {
    await fsPromises.writeFile(filePath, data, {
      flag: "wx",
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();

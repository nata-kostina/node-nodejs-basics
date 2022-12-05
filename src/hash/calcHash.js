import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const sourceFile = path.join(
    path.join(__dirname, "files"),
    "fileToCalculateHashFor.txt"
  );
  try {
    const fileContent = await readFile(sourceFile);
    const hash = createHash("sha256").update(fileContent).digest("hex");
    console.log(hash);
  } catch (error) {
    throw new Error("Operation failed");
  }
};

await calculateHash();

import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childScriptPath = path.join(__dirname, "files/script.js");

const spawnChildProcess = async (args) => {
  const transformedArgs = args ? args.split(" ") : [];
  const forked = fork(childScriptPath, transformedArgs, { silent: true });
  process.stdin.on("data", (chunk) => forked.stdin.write(chunk));
  forked.stdout.on("data", (chunk) => console.log(chunk.toString()));
};

spawnChildProcess();

import { Worker } from "worker_threads";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childScriptPath = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const cpuData = os.cpus();
  let number = 10;
  const workersResults = await Promise.allSettled(
    cpuData.map(
      (cpu) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(childScriptPath, { workerData: number++ });
          worker.on("message", resolve);
          worker.on("error", reject);
        })
    )
  );
  const results = workersResults.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));
  console.log(results);
  return results;
};

await performCalculations();

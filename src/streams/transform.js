import {  Transform  } from "stream";
import { EOL } from "os";

const transform = async () => {
  const reverseStr = new Transform({
  
    transform(chunk, encoding, callback) { 
      const reversed = chunk.toString().replace(EOL, '').split("").reverse().join("") + EOL;    
      callback(null, reversed);
    }
  });
  process.stdin.pipe(reverseStr).pipe(process.stdout);
};

await transform();
const parseArgs = () => {
  const args = process.argv.slice(2);
  if (!args.length) return;

  const result = args.reduce((acc, arg, index, arr) => {
    const valueCandidate = arr[index +1 ];
    if (valueCandidate && arg.startsWith("--")) {
      const transformedArgs = arg.slice(2);
      const argsTransformed = `${transformedArgs} is ${valueCandidate}`;
      acc.push(argsTransformed)
    }
    return acc;
  }, []);

  console.log(result.join(', '));
};

parseArgs();

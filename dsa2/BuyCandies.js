function findCombinations(coins, candies, currentCombination, combinations) {
    // Base case: if coins is 0, add the current combination to the list of combinations
    if (coins === 0) {
      combinations.push(currentCombination.slice());
      return;
    }
  
    // Base case: if there are no more candies or coins, return
    if (candies.length === 0 || coins < candies[0]) {
      return;
    }
  
    // Recursive case 1: Include the current candy in the combination
    currentCombination.push(candies[0]);
    findCombinations(coins - candies[0], candies, currentCombination, combinations);
    currentCombination.pop();
  
    // Recursive case 2: Exclude the current candy from the combination
    findCombinations(coins, candies.slice(1), currentCombination, combinations);
  }
  
  function displayCombinations(n, coins, candies) {
    const combinations = [];
    findCombinations(coins, candies, [], combinations);
  
    if (combinations.length === 0) {
      console.log(-1);
      return;
    }
  
    // Sort the combinations lexicographically
    combinations.sort((a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) {
          return a[i] - b[i];
        }
      }
      return a.length - b.length;
    });
  
    // Display the distinct combinations
    for (let combination of combinations) {
      console.log(combination.join(" "));
    }
  }
  
  function runProgram(input) {
    const inputLines = input.trim().split("\n");
    const [n, coins] = inputLines[0].trim().split(" ").map(Number);
    const candies = inputLines[1].trim().split(" ").map(Number);
  
    displayCombinations(n, coins, candies);
  }
  
  // Run the code
  if (process.env.USERNAME === "") {
    runProgram(`4 7
  2 3 6 7`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
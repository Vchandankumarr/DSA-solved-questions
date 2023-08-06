function findMaxStones(n, boxes) {
    let left = 0; // Left pointer starting from Ram's side
    let right = n - 1; // Right pointer starting from Shyam's side
    let ramStones = 0; // Number of stones collected by Ram
    let shyamStones = 0; // Number of stones collected by Shyam
  
    while (left < right) {
      if (ramStones === shyamStones) {
        // If both players have collected the same number of stones
        // Move both pointers towards each other and update stone counts
        ramStones += boxes[left];
        shyamStones += boxes[right];
        left++;
        right--;
      } else if (ramStones < shyamStones) {
        // If Ram has collected fewer stones than Shyam
        // Move Ram's pointer towards Shyam and update stone count
        ramStones += boxes[left];
        left++;
      } else {
        // If Shyam has collected fewer stones than Ram
        // Move Shyam's pointer towards Ram and update stone count
        shyamStones += boxes[right];
        right--;
      }
    }
  
    // Check if both players have collected the same number of stones
    if (ramStones === shyamStones) {
      return ramStones; // Return the maximum number of stones collected
    } else {
      return 0; // Return 0 if it is not possible to have the same number of stones
    }
  }
  
  function runProgram(input) {
    const inputLines = input.trim().split("\n");
    const t = Number(inputLines[0]);
  
    let line = 1;
    for (let i = 0; i < t; i++) {
      const n = Number(inputLines[line++]);
      const boxes = inputLines[line++].trim().split(" ").map(Number);
  
      const maxStones = findMaxStones(n, boxes);
      console.log(maxStones);
    }
  }
  
  // Run the code
  if (process.env.USERNAME === "") {
    runProgram(``);
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
  
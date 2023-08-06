function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  function canRetrievePalindrome(s) {
    let left = 0;
    let right = s.length - 1;
  
    while (left < right) {
      if (s[left] !== s[right]) {
        // Delete character on the left and check if the resulting string is a palindrome
        if (isPalindrome(s, left + 1, right)) {
          return "YES";
        }
        // Delete character on the right and check if the resulting string is a palindrome
        if (isPalindrome(s, left, right - 1)) {
          return "YES";
        }
        return "NO"; // If deleting either character doesn't result in a palindrome
      }
      left++;
      right--;
    }
  
    return "YES"; // If the string is already a palindrome
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    const t = parseInt(input[0]);
    let line = 1;
  
    for (let i = 0; i < t; i++) {
      const s = input[line++];
      const result = canRetrievePalindrome(s);
      console.log(result);
    }
  }
  
  if (process.env.USERNAME === "") {
    runProgram(`3
  aba
  abca
  abc`);
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
  
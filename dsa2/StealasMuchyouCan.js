function MaxValue(C, n, values, weights) {
  
    let  valuePerWeight = [];
    
    for (let i = 0; i < n; i++) {
      valuePerWeight.push(values[i] / weights[i]);
    }
  
    let sortedGems = [];
    
    for (let i = 0; i < n; i++) {
      sortedGems.push({
        value: values[i],
        weight: weights[i],
        ratio: valuePerWeight[i],
      });
    }
    sortedGems.sort((a, b) => b.ratio - a.ratio);
  
    let maxValue = 0;
    let currentWeight = 0;
    
    for (let i = 0; i < n; i++) {
      if (currentWeight + sortedGems[i].weight <= C) {
        
        maxValue += sortedGems[i].value;
        currentWeight += sortedGems[i].weight;
      } else {
       
        const remainingWeight = C - currentWeight;
        
        const fraction = remainingWeight / sortedGems[i].weight;
        maxValue += fraction * sortedGems[i].value;
        break;
      }
    }
     return Math.round(maxValue);
  }
  
  function runProgram(input) {
      
    let  newinput = input.trim().split("\n");
    let  C = +newinput[0];
    let n = +newinput[1];
    let values = newinput[2].split(" ").map(Number);
    let weights = newinput[3].split(" ").map(Number);
  
    let maxVal = MaxValue(C, n, values, weights);
    console.log(maxVal);
  }
  
  if (process.env.USER === "") {
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
  
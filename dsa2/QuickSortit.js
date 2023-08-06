function quickSort(arr,x,y){
   
    if(x>=y){
        return arr[x]
    }
    let pivot = partition(arr,x,y)
    quickSort(arr,x,pivot-1)
    quickSort(arr,pivot+1,y)
    
    return arr.join(" ")
}
function partition(arr,x,y){
    // console.log(arr,x,y)
    let pivotValue = arr[x]
    let swap = x
    
    for(let i=x+1;i<=y;i++){
        if(pivotValue > arr[i]){
            
            swap++
            
            if(i !== swap){
                [arr[i],arr[swap]]=[arr[swap],arr[i]]
            }
        }
    }
    if(swap != x){
        [arr[swap],arr[x]]=[arr[x],arr[swap]]
    }
    
    return swap
    
}

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let n = +input[0]
	let arr = input[1].trim().split(" ").map(Number)
	let x = 0 ,y=n-1
    console.log(quickSort(arr,x,y))
	
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
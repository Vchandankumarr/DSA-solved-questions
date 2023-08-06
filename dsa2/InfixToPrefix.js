function PostfixtoInfix(str){
       
    let stack = [];

    let postfix = "";


      for (let i = 0; i < str.length; i++) {
           let ch = str[i];


      if (ch >= 'a' && ch <= 'z') {
        postfix += ch;
       }

      else if (ch === '(') {
        stack.push(ch);
       }
       // stack =[(,]

    else if (ch === ')') {
       while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfix += stack.pop();
        }

       if (stack.length > 0 && stack[stack.length - 1] === '(') {
           stack.pop();
       }
       }else {
            while (stack.length > 0 && getPriority(stack[stack.length - 1]) >= getPriority(ch)) {
              postfix += stack.pop();
           }
           stack.push(ch);
       }
   }


while (stack.length > 0) {
postfix += stack.pop();
}

console.log(postfix);
  
 
  function getPriority(ch) {
        if (ch === '^') { //power
        return 3;
      }
      else if (ch === '*' || ch === '/') {
       return 2;
      }
      else if (ch === '+' || ch === '-') {
       return 1;
     }
     else {
      return 0;
     }
  }
  
}
function runProgram(input){
 
 input=input.trim().split("\n");
 
 let str =input[0].trim()
 
 PostfixtoInfix(str)
}
if (process.env.USERNAME === "") {
    runProgram(`
    a+b-c+d*(e-f)/g+(h*(i/j))
    `);
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

//ab+c-def-*g/+hij/*+
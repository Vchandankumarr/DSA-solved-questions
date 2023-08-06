function ticTacToe(matrix){
    //write code here
    let sol = [];
    for (let i = 0;i<matrix.length;i++) {
        
        sol.push([matrix[i][0], matrix[i][1], matrix[i][2]].join(""));
        sol.push([matrix[0][i], matrix[1][i], matrix[2][i]].join(""));
    }
    sol.push([matrix[0][0],matrix[1][1],matrix[2][2]].join(""))
    sol.push([matrix[0][2],matrix[1][1],matrix[2][0]].join(""))
    
    //console.log(sol)
    for(let i=0;i<sol.length;i++){
        if(sol[i] != "ooo" && sol[i] != "xxx"){
            continue;
        }else if(sol[i] == "ooo"){
            console.log("o")
        }else if(sol[i] == "xxx"){
            console.log("x")
        }else{
            console.log("Tie")
        }
    }
}
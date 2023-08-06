function sumWithoutBorders(N, M, matrix){
    //write code here
    let sum = 0;
    
    for(let i=1;i<=N-2;i++){
        
        for(let j=1;j<=M-2;j++){
            
            sum += matrix[i][j]
        }
        
    }
    console.log(sum)
}
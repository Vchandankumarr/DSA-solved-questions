function rotateBy90Clockwise(N, matrix){
    //write code here
    for(let i=0;i<N;i++){
        
        let bag ='';
        
        for(let j=N-1;j>=0;j--){
            bag += matrix[j][i]+" ";
            
        }
        console.log(bag)
    }
  
}

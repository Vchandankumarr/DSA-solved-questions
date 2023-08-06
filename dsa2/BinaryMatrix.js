function binaryMatrix(N,M, matrix) {
    //write code here
  
    for(let i=0;i<N;i++){
        let bag =""
        for(let j=0;j<M;j++){
            
            if(matrix[i][j] == 1){
                bag+= 0 +" ";
                
            }if(matrix[i][j] == 0){
                bag+= 1+" ";
            }
        }
        console.log(bag)
    }
  }
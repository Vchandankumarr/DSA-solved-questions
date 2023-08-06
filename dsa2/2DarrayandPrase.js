function twoArrayAndPhrase(n, m, matrix){
    //write code here
    
    let count =0;
    let str = "";
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            
            if(m-j >=4){
                str = matrix[i][j] + matrix[i][j+1] +matrix[i][j+2] +matrix[i][j+3]
                if(str == "saba")
                count++;
                
            }
            if(n-i >=4){
                 str = matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] + matrix[i + 3][j];
                if (str == "saba")
                 count++;
            }
            if ((m-j >= 4) && (n-i >= 4)){
                str = matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2] + matrix[i + 3][j + 3];
                if (str == "saba")
                count++;
            }
            if (i >= 3 && m - j >= 4) {
                str = matrix[i][j] + matrix[i-1][j+1] + matrix[i - 2][j + 2] + matrix[i - 3][j + 3];
                if (str == "saba")
                count++;
            }
                
            
        }
        
    }
    console.log(count)
    
  

    
  
}
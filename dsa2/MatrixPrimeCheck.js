function matrixPrimeCheck(N, M, arr) {
    //write code here
    let count=0;
    
    for(let i=0;i<N;i++){
        
        for(let j=0;j <M;j++){
            
            if(checkPrime(arr[i][j]) == true){
               count++;
                
            }
        }
    }
  
    console.log(count);
    
  }
  
  
  function checkPrime(num){
      
      if(num <= 1 || !num){
          return false;
          
      }for(let i=2;i <= (num ** 0.5);i++){
          
          if(num %i == 0){
              return false;
          }
      }
      return true;
      
  }

  //3 3
// 1 2 3 
// 4 5 6
// 7 8 9
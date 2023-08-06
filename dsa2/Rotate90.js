function rotateBy90(R, matrix){
    //write code here
    
     for(let i=R-1;i>=0;i--){
         
         let bag ="";
         
         for(let j=0;j<=R-1;j++){
             bag += matrix[j][i]+" ";
         }
         
         console.log(bag)
     }
  
}

//4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

// ans
// 4 8 4 8 
// 3 7 3 7 
// 2 6 2 6 
// 1 5 1 5 
function diamondTraversal(matrix) {
    //Write your code here
      let bag = "";
       let N = matrix.length;
       
       let i = (N-1)/2;
       
       let j = N-1;
       
       while(i >= 0) {
           
            bag += matrix[i][j] + " ";
          
            i--;
            j--;
     
      }
       i = 1; 
       
       while(i <= (N-1)/2) {
           
           bag += matrix[i][j] + " ";
           
       i++;
       j--;
      }
       
       j = 1;
       
       while (i < N) {
           
           
          bag += matrix[i][j] + " ";
           
          i++;
          j++;
           
      }
       i = N-2;
         while (i > (N-1)/2) {
             
              bag += matrix[i][j] + " ";
             
           i--;
           j++;
            
         }
         
        console.log (bag);
  }

  let matrix = 3
//   1 2 3
//   4 5 6
//   7 8 9
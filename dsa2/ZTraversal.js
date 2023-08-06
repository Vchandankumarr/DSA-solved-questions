function zTraversal(N,arr){
    //write code here
    let bag="";
    
    for(let i=0;i < N;i++){
        
        bag+=arr[0][i]+" ";
    }    
        let i=1;
        let j=N-2;
        while(i < N && j>=0){
            
            bag+=arr[i][j]+" ";
            i++;
            j--;
        }
        
        for(let j=1;j<arr.length;j++){
                   
            bag+=arr[N-1][j]+ " ";
        }
         console.log(bag);
  
}
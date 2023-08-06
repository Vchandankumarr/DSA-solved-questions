function spiralTraversal(N, M, arr){
    //write code here
    let top=0;
    let bottom= N-1;
    let left=0;
    let right= M-1;
    let bag="";
    let count=0;
    let total = N*M;
    while(count<total){
        for(let i=top;i<=bottom && count<total ;i++){
            bag+=arr[i][left]+" ";
            count++;
        }
        left++
        for(let i=left;i<=right && count<total;i++){
            bag+=arr[bottom][i]+" ";
            count++;
        }
        bottom--
        for(let i=bottom;i>=top && count<total;i--){
            bag+=arr[i][right]+" ";
            count++;
        }
        right--;
        for(let i=right;i>=left && count<total;i--){
            bag+=arr[top][i]+" ";
            count++
        }
        top++
        
    }
    console.log(bag)
     
  
  
}
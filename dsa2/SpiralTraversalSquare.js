function spiralTraversalIV(N, arr){
    //write code here
    let top = 0;
    let bottom = N-1;
    let left = 0;
    let right = N-1;
    let count = 0;
    let total = N*N;
    let bag = '';
    
    while(count < total) {
        
        for(let i=bottom;i>=top && count <total;i--){
            bag += arr[i][right] + " ";
            count++;
            
        }
        right--;
        
        for(let i=right;i>=left&& count <total;i--){
            bag += arr[top][i]+" ";
            count++;
        }
        top++;
        
        for(let i=top;i<=bottom && count<total ;i++){
            bag+= arr[i][left]+" ";
            count++
        }
        left++;
        
        for(let i=left;i<=right && count<total;i++){
            bag+= arr[bottom][i]+" ";
            count++
        }
        bottom--;
    }
    console.log(bag)
  
}


// 1
// 3 
// 1 2 3
// 4 5 6
// 7 8 9


// ans = 9 6 3 2 1 4 7 8 5 
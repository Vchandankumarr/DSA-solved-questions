function equilibriumElement(N, arr){
    //write code here
  
    let totalsum = 0;
    let equisum = 0;
    let bag = "";
    for (let i=0;i<arr.length;i++){
        totalsum += arr[i]
    }
    // console.log(totalsum)
    for(let i=0;i<arr.length;i++){
        totalsum -= arr[i];
        if(equisum == totalsum){
          
            bag += i;
        }
        
        equisum += arr[i];
        
    }
    // console.log(bag)
    if(bag.length == 0){
        console.log(-1)
    }
    else{
        console.log(bag)
    }
    

}
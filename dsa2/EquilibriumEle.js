function equilibriumElement(N, arr){
    //write code here
  
    let total = 0;
    let equilibrium = 0;
    let bag = "";
    
    for (let i=0;i<arr.length;i++){
        total += arr[i]
    }
    
    for(let i=0;i<arr.length;i++){
        total -= arr[i];
        
        if(equilibrium == total){
            bag += i;
        }
        equilibrium += arr[i];
        
    }
    if(bag.length == 0){
        console.log(-1)
    }
    else{
        console.log(bag)
    }
    

}

//2
// 5
// 15 1 5 5 5
// 3
// 1 2 3

anss= 1
     -1
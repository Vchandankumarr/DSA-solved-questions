function totalBill(N) {
    // Write code here
   
    if(N<=50){
        console.log(80+(N*3))
    }
     else if(N<= 150){
        console.log(80 + (50*3) + ((N-50) * 5))
        
    }else {
        console.log(80 + (50*3) +(100*5)+ ((N-150) * 10))
    }
    
}

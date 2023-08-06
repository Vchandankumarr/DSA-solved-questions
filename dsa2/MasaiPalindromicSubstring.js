function masaiPalSubString(S){
    //write code here
    let long = 0;
    for(let i=0;i<S.length;i++){
        let cont = "";
        for(let j=i;j<=S.length;j++){
            
             cont += S[j];
             
             let rev = '';
             for(let k = cont.length-1;k>=0;k--){
                 
                 rev += cont[k];
             }
            //  console.log(rev)
             if(cont == rev && cont.length > long){
                 
                 long = cont.length;
                 
             }
            
        }
    }
     console.log(long)
    
}

//thisracecarisgood
//7
function footBallTournament(n, teamNamesArr) {
  
  
    let obj={};
    for(let i=0;i<n;i++){
        if(obj[teamNamesArr[i]]==undefined){
            obj[teamNamesArr[i]]=1;
        }else{
            obj[teamNamesArr[i]]++;
        }
    }
    
    let count=0;
    let bag;
    for(let key in obj){
        if(obj[key]>count){
            count=obj[key]
            bag=key;
        }
    }
    console.log(bag);
  
    
  }


  //5
// A
// ABA
// ABA
// A
// A
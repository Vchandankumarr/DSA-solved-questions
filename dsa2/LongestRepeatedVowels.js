function longestRepeatedVowel(N, str) {
    //write code here
     let vowels=["a","e","i","o","u"];
     let maxcount = 0;
     let maxvowel=""
 
    for(let i=0;i<N;i++){
        let count=0;
     for(let j=0;j<N;j++)
     {
         if(str[j]==vowels[i])
         {
             count++;
             
             if(count > maxcount)
             {
                 maxcount = count;
                 maxvowel=vowels[i];
             }
         }
         else
         {
             count = 0;
         } 
     }
 }
 console.log(maxcount)
}
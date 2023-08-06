function decodeMessage(string) {
    
    let maxCount = 0;
    let Count = 1;
    for (let i=1; i<string.length; i++) {
      if (string[i] === string[i - 1]) {
           Count++;
        } 
      else {
        maxCount = Math.max(maxCount,Count);
        Count = 1;
    }
  }
  console.log(Math.max(maxCount,Count));
}
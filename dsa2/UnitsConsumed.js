function unitsConsumed(n) {
    //write code here
    n -= 80;

    if (n <= 0) {
        
        console.log(0);
        
    } else if (n <= 50 * 3) {
        
        console.log(Math.ceil(n/3));
        
    } else if (n <= (50 * 3) + (100 * 5)) {
        
        console.log(50 + Math.ceil((n - 50 * 3) / 5));
        
    } else {
        console.log(150 + Math.ceil((n - (50 * 3) - (100 * 5)) / 10));
    }
    
    
}
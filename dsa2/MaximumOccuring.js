function maximumOccuringElement(A,N){
    //write code here
    let obj ={};
    for(let i=0;i<A.length;i++){
        if(obj[A[i]] ==  undefined){
            obj[A[i]] =1;
            
        }else{
        obj[A[i]]++;
        
        }
    }
    let max=0;
    let k ="";
    for(let key in obj){
        if(max  < obj[key]){
            max= obj[key];
            k= key;
            
        }
    }
    console.log(k);
}

let N = 5;
let A = [1,2,3,4,1]
maximumOccuringElement(A,N)

console.log("Heloo")
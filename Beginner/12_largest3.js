function checkmax(a,b,c){
    if(a > b && a >c){
        return "a is big"
    }
    else if(b > a && b > c){
        return "b is big"
    }
    else if(c > a && c>b){
        return "c is big"
    }
    else{
        return "3 are equal"
    }
}
console.log(checkmax (10,10,30))
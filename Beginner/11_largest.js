function checkmax(a,b){
    if(a > b ){
        return "a is big"
    }
    else if (b > a){
        return "b is big"
    }
    else {
        return "both are equal"
    }
}
console.log(checkmax(20,40))
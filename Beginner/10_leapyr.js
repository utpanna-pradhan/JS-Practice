function checkleap(y){
    if(y %400 === 0 || y%4===0){
        return "leap year"
    }
    else{
        return "not"
    }
}
console.log(checkleap(2028))
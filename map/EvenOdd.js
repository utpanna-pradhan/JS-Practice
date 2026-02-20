const numbers = [1,2,3,4];
const evenodd = numbers.map((num)=>{
    if(num %2 == 0){
        return "even"
    }
    else{
        return "odd"
    }
})
console.log(evenodd);

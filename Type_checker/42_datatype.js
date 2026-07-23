// Take one input and print whether it is:

// Number
// String
// Boolean
function checkType(input){
    return `The input is of type ${typeof(input)}`
}
console.log(checkType(1000));
console.log(checkType("Jina"));
console.log(checkType(false));
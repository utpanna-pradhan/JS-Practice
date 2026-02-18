const products  = ["pen","pencil","paper"];
const addid = products.map((item,index)=>{
return{
    id:index + 1,
    name:item
}
})
console.log(addid);

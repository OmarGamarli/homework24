// ------------1-----------
function addSuffix(suffix){
return function(text){
    return text+suffix
}
}
let add_ly=addSuffix("ly")
console.log(add_ly("hopeless"));
console.log(add_ly("total"));
// ------------2------------
function generate(num,length){

}
// ------------3-------------
function find(obj){
    let keys=Object.keys(obj)
    let values=Object.values(obj)
    return[keys,values]
}

const obj2={a:1,b:2}
console.log(find(obj2)[0]);
console.log(find(obj2)[1]);

// ---------------4-----------------





// --------------5----------------
function count(number) {
    return number.toString().length
}
const num = 45684
console.log(count(num))

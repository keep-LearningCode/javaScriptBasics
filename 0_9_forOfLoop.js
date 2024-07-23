const arr=[1,2,3,4,5];

for (const num of arr) {
    //console.log(num)
    
}

const greeting="Hello World!";
for (const greet of greeting) {
    console.log(greet);
    break;
}

const map1 = new Map();
map1.set('a','apple');
map1.set('b', 'banana');
console.log('________________forOf loop_______________________')
for (const [iterator, value] of map1) {
    console.log(iterator,'->',value)
}

console.log('________________forOf loop on object will give error_______________________')
const obj={
    js:'javascript',
    java:'java',
    cpp:'c++'
}

// for(const iterate of obj){
   // console.log(iterate,'->',obj[iterate]);
// }
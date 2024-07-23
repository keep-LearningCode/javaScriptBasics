const obj={
    js:'javascript',
    java:'java',
    cpp:'c++'
}

for(const iterate in obj){
    console.log(iterate,'->',obj[iterate]);
}
console.log('_______________________________________________________')
const arr=['java', 'javascript']
for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(element);
    }
}
console.log('_______________________________________________________')
const map1 = new Map();
map1.set('a','apple');
map1.set('b', 'banana');

for(const i in map1){
    console.log(map1(i));
}// this will not return any thing on colsole because map is not interatable by for in loop

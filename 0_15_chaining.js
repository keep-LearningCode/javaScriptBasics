const arr=[1,2,3,4,5,6];

const chainedArray= arr.filter((item)=> item>3).map((num)=>num*10);

console.log(chainedArray);
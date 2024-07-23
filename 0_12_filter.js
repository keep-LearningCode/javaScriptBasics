console.log("________________________issue with forEach loop__________________________");
//doesn't return value
const arr=[1,2,3,4,5];

const newArr=arr.forEach((item)=>{
    //console.log(item);
    return item;
});
//console.log(newArr);

console.log("________________________use of filter it will return value___________________");
let newArr1=[];

newArr1=arr.filter((item)=> item>2)
//or
//newArr1=arr.filter((item)=>{item<4})// this will give error because of scope
newArr1=arr.filter((item)=>{return item<4})
console.log(newArr1);


console.log("________________________work around with forEach___________________");

let newArr2=[];

arr.forEach((item)=>{
    if(item>1){
        newArr2.push(item);
    }
})
console.log(newArr2);


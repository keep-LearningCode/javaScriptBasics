for(let i=1; i<=10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
console.log("_____________________________________")
for (let i = 0; i < 3; i++) {
    console.log( `number ${i}!` );
  }
console.log("______________________________________")
let i=0;
while(i<3){
    console.log(i);
    i++;
}
console.log("______________________________________")
let n=10
nextPrime:
for(let i=2; i<=n; i++){
    for(let j=2; j<i; j++){
        if(i % j == 0){
           continue nextPrime;
        }
    }
    console.log("Prime number",i);
}
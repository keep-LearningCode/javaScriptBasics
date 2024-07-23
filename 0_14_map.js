const arr=[1,2,3,4,5]

const mapArray= arr.map((item)=> item*10);
//console.log(mapArray);

const mapCondition= arr.map((num)=>{
    if(num>4){
        return num+1;
    }
})
console.log(mapCondition) //[ undefined, undefined, undefined, undefined, 6 ]
//since it will iterate through and process on all the array element

const filterCondition= arr.filter((num)=>{
    if(num>4){
        return num+1;
    }
})
console.log(filterCondition)//[ 5 ] since it will provide only thruthy value do not perform any action
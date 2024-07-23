const arr=[1,2,3,4,5];

arr.forEach((item)=>{
//console.log(item);
})

arr.forEach(function (item){
    //console.log(item);
})

arr.forEach(function (item, index, arr1){
   // console.log(item, index, arr1);
})

console.log("__________________________forEach loop on array of objects_______________________")
const arr1=[
    {language:'javascript',
        extension:'js'
    },
    {language:'java',
        extension:'java'
    },
    {language:'python',
        extension:'py'
    }
]

arr1.forEach((item)=>{
    console.log(item.language,' use file extension', item.extension);
}
)
const itemList=[
    {
        courseName:'js course',
        price: 2999
    },
    {
        courseName:'java course',
        price: 3999
    },
    {
        courseName:'python course',
        price: 900
    },
    {
        courseName:'reading course',
        price: 200
    },
]
const initialValue=0;
const addToCart= itemList.reduce((acc, currentValue)=>{
return acc + currentValue.price;
},initialValue);

console.log("all the courses are added to cart",addToCart);

const selectCourse= itemList.filter((item)=>item.price<1000)
                            .reduce((acc, curr)=>acc+curr.price, initialValue);

console.log("shop the cheapest course", selectCourse)


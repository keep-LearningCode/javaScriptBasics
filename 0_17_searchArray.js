const fruits = ["apple", "banana", "grapes", "mango", "orange"];

const selectedItem=(arr, searchIt)=>{
    const findItem= arr.filter((item)=>{
        return item.toLowerCase().includes(searchIt.toLowerCase())
    })
return findItem;
}

console.log(selectedItem(fruits, 'ap'));
console.log(selectedItem(fruits, 'an'));

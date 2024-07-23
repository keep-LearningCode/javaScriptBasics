const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
const {age, ...rest} = user;
console.log(age, rest);



const user1 = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 45
}

const clone = {...user1} // Output, {name: "Alex", address: "15th Park Avenue", age: 43}
console.log(clone, clone === user, clone == user);
clone === user; // Output, false

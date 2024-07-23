//.flat()
const a=[1,2,3,[4,5],6,[7,8,[9,10]],11];
const b= a.flat(1);
const c= a.flat(Infinity);
console.log(b,"flat");
console.log(c,"flat");

//.isArray
console.log(Array.isArray("new"));
console.log(Array.from("new"));
console.log(Array.from({name:"shiva"}));

//convert object in array
const obj = {name: "new"};
const entriesArray = Object.entries(obj);
console.log(entriesArray); // Output: [["name", "new"]]
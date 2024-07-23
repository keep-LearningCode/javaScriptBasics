const map1 = new Map();
map1.set('a','apple');
map1.set('b', 'banana');
console.log(map1);
console.log(map1.get('a'));


map1.set('a', 97);
console.log('________________forOf loop_______________________')
for (const [iterator, value] of map1) {
    console.log(iterator,'->',value)
}

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('a');
map1.delete('b');

console.log(map1.size);


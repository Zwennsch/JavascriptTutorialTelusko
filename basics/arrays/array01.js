let values = new Array();

// another way :
let values2 = [5,7,8];
console.log(values2);
console.log(values2.length);
// this is how you add values later to it
values2.push(84);

console.log(values2);

// to fetch one particular value use indicies
console.log(values2[0]);
console.log(values2[1]);
// you don't get an error if your out of bounds but instead 'undefined'
console.log(values2[6]);


let data = [5,7,8,9]

// push does return the length

console.log(data.push(1))

// pop will remove the last value and return it
console.log(data.pop())
// shift removes the first element from the array and return the element
console.log(data.shift())

// unshift adds at the beginning

console.log(data.unshift(84))
console.log(data);

let data2 = [5,7,9,10];
// splice removes elemts from in between and removes them
// console.log(data2.splice(2))   => [9,10]
// console.log(data2.splice(1))  => [7,9,10]
// console.log(data2.splice(1, 2))  => [7,9]  von index 1 ; 2 stellen gesamt


// removes 7 and 8, inserts 15 and then adds the rest of the remaining array which is 9
data.splice(1,2, 15)

console.log(data);
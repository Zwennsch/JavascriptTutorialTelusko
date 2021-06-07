let alien = {
    name : "navin",
    tech : "JS",
    laptop : {
        cpu : "i7",
        ram : "8gb",
        brand: "asus",
    }
}

// console.log(alien);  // prints the object
// console.log(alien.laptop); // prints the laptop object inside alien object
// console.log(alien.laptop.brand);  // asus
// console.log(alien.laptop.brand.length);  // 4

// console.log(alien.laptop.brand1); => undefined
// console.log(alien.laptop.brand1.length); => error!
// console.log(alien.laptop.brand1?.length);  => undefined
// console.log(alien.laptop.brand?.length);  => 4

// ? means only do if available

//  to delete a property use the delete keyword
delete alien.tech;
console.log(alien); //


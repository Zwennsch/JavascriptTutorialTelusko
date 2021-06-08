let alien2 = {
    name : "navin",
    tech : "JS",
    laptop : {
        cpu : "i7",
        ram : "8gb",
        brand: "asus",
    }
}

// for(let key in alien2){
//     console.log(key);
// }
for(let key in alien2){
    console.log(key, alien2[key]);
}
// for(let key in alien2.laptop){
//     console.log(key);
// }
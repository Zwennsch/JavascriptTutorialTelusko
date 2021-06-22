let myObject = {
    name: 'Hans',
    age: 84,

    greet: function(){
        let storage = 100;
        // here you have to use the this keyword
        console.log(this.name);
        console.log(storage);
    }
}
myObject.greet();


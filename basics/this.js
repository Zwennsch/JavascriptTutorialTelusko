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

let laptop1 = {
    cpu: 'i7',
    brand: 'HP',
    ram: 16,

    compare : function(otherLaptop){
        if(this.cpu > otherLaptop.cpu){
            console.log(this);
        }else{console.log(otherLaptop);}
    }
}

let laptop2 = {
    cpu: 'i5',
    brand: 'Dell',
    ram: 8
}

laptop1.compare(laptop2);


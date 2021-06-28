
// for a constructor function you use Capitol name
function Alien(name, technology){
    this.name = name;
    this.technology = technology;
    // this returns the object automatically

    // methods for a constructor function
    this.work = function(){
        console.log("I am working");
    }
}

let alien1 = new Alien('Sven', 'Java');
let alien2 = new Alien('Hans', 'HTML');

console.log(alien1);
console.log(alien2);
alien1.work();
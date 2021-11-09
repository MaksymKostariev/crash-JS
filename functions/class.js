class motorcycle {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
    }

    bike(){
        return this.brand +" "+ this.model;
    }
}  

const GS = new motorcycle("BMW", "R 1250 GS");

function newBike(obj){
    return Object.create(obj);;
}

const Hornet = newBike(GS);

Hornet.brand = "Honda";
Hornet.model = "CB 600 F";

console.log("GS is", GS.bike());
console.log("Hornet is", Hornet.bike());
console.log("");

function newField(obj, key, value) {
   obj[key] = value;
   return obj;
}

newField(GS, "class", "enduro");
newField(Hornet, "class", "street");

function testRide(bike, type) {
    console.log("Your bike is", bike);

    if (type === "enduro") {
        console.log("You'r going OFF Road trip");
    } else if (type === "street") {
        console.log("You'r going Road trip");
    }
}

testRide(GS.bike(), GS.class);
testRide(Hornet.bike(), Hornet.class);
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
const Hornet = new motorcycle("Honda", "CB 600 F")

console.log("GS is", GS.bike());
console.log("Hornet is", Hornet.bike());
console.log("");

GS.class = "enduro";
Hornet.class = "street";

function testRide(bike, type) {
    console.log("Your bike is", bike);

    if (type === "enduro") {
        console.log("Your going OFF Road trip");
    } else if (type === "street") {
        console.log("Your going Road trip");
    }
}

testRide(GS.bike(), GS.class);
testRide(Hornet.bike(), Hornet.class);

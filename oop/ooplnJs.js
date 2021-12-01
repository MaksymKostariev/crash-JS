class Bike {
    constructor(name) {
        this.name = name;
    }
    sound() { return ''; }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Sportbike extends Bike {
    constructor(name) {
        super(name);
    }

    sound() {
        return 'Zooooom!';
    }
}

class Choper extends Bike {
    constructor(name) {
        super(name);
    }

    sound() {
        return 'Brbrbrbr!';
    }
}

const CBR = new Sportbike('CBR');
console.log("Honda CBR sound - " + CBR.sound());
const Harley = new Choper('Harley');
console.log("Harley Davidson sound - " + Harley.sound());

class Ninja {
    constructor(name, health) {
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = health;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name, this.speed, this.strength, this.health)
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 15);
ninja1.sayName();
ninja1.showStats();
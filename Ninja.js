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
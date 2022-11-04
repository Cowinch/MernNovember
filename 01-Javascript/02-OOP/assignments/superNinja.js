class Ninja {
    constructor(name, health){
        this.name=name
        this.health=health
        this.speed=3
        this.strength=3

    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("Name: "+this.name)
        console.log("Strength: "+this.strength)
        console.log("Speed: "+this.speed)
        console.log("Health: "+this.health)
    }
    drinkSake(){
        this.health+=10
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200)
        this.strength=10
        this.speed=10
        this.wisdom=10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("a wise message")
    }

}

const ninja = new Ninja("Sam",10)
ninja.showStats()

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()
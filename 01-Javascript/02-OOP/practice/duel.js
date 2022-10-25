class Card {
    constructor(name, cost){
        this.name=name
        this.cost=cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power=power
        this.res=res
    }
    attack(target){
        target.res-=this.power
        console.log(`${this.name} reduced ${target.name}'s stats by ${this.power}`)
    }
    showStats(){
        console.log(`${this.name} has ${this.cost} cost, ${this.power} power and ${this.res} res`)
        console.log("\n")
    }
    
}

class Effect extends Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost)
        this.stat=stat
        this.magnitude=magnitude
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res-=this.magnitude
                console.log(`${target.name} had its resilience changed by ${this.magnitude}`)
            } else {
                target.power-=this.magnitude
                console.log(`${target.name} had its power changed by ${this.magnitude}`)
            }
        } else {
            throw new Error( "Target must be a unit!" )
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
redBeltNinja.showStats()

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
blackBeltNinja.showStats()

const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3)

const promise = new Effect("Unhandled Promise Rejection", 1, "resilience", -2)

const pair = new Effect("Pair Programming", 3, "power", 2)

hardAlgorithm.play(redBeltNinja)
redBeltNinja.showStats()

promise.play(blackBeltNinja)
blackBeltNinja.showStats()

pair.play(redBeltNinja)
redBeltNinja.showStats()

redBeltNinja.attack(blackBeltNinja)
blackBeltNinja.showStats()
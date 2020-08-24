class Animal {
    constructor (name) {
        this.name = name
    }

    speack() {
        console.log(`${this.name} falando ......`)
    }
}

class Dog extends Animal {
    constructor(name, type){
        super(name)
        this.type = type
    }

    speack(){
        console.log(`${this.name} (${this.type}) falando ......`)
    }
}



const animal = new Animal("Au Au")
const dog = new Dog("Jack","poodle")

dog.speack()
animal.speack()
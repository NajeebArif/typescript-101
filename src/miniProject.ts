
class Dog {
    constructor(readonly name: string) { }

    sayHello(): string {
        return 'Dog says Hello'
    }
}

class Fish {
    constructor(readonly name: string){}

    dive(howDeep: number): string{
        return `Diving ${howDeep} feet`
    }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string | undefined{
    if(pet instanceof Dog){
        return pet.sayHello();
    }else if(pet instanceof Fish){
        return 'Fish Cannot talk sorry'
    }
}

const myDog = new Dog('Bruno');
const myFish = new Fish('Jal Pari');

console.log(talkToPet(myDog))
console.log(talkToPet(myFish))


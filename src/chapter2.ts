
console.log('-------------------------------------------------------------------------------------------')

// to use Symbol as primitive, 
// es2015 needs to be added to the 'lib' key of compiler options in tsconfig.json
const ord = Symbol('orderId')

const myOrder = {
    ord: '123'
}

// DOM also needs to be included in 'lib' to use console.log
console.log(myOrder['ord'])

console.log('-------------------------------------------------------------------------------------------')

//Type inference in typescript
const age = 25;

function getTax(income: number) : number {
    return income * 0.15;
}

let yourTax = getTax(5000);

console.log(yourTax);

console.log('-------------------------------------------------------------------------------------------')

//Type Union

function padLeft(value: string, padding: any): string{
    if(typeof padding === 'number'){
        return Array(padding+1).join(" ") + value;
    }
    if(typeof padding === 'string'){
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

function testPaddingWithAny(){
    console.log(padLeft("Hello World",4))
    console.log(padLeft("Hello World","John says "))
    try{
        console.log(padLeft("Hello World",true))
    }catch(err: any){
        console.error('Bad things happening.');
    }
}

testPaddingWithAny();

function padLeftUnion(value: string, padding: string | number): string {
    if(typeof padding === 'number'){
        return Array(padding+1).join(" ") + value;
    }else{
        return padding + value;
    }
}

console.log(padLeftUnion("Hello",4))
console.log(padLeftUnion("Hello","NJ says "))


console.log('-------------------------------------------------------------------------------------------')

//Using the type keyword

type Foot = number;
type Pound = number;

type Person = {
    name: string,
    height: Foot,
    weight?: Pound
}

let person: Person = {
    name: 'Najeeb',
    height: 5.7,
    weight: 70
}

const person2: Person = {
    name: 'Arif',
    height: 5.7
}



console.log(`Created a custom 'type' Person: ${JSON.stringify(person)} which uses type aliases.`)
console.log(`Created a custom 'type' Person: ${JSON.stringify(person2)} which uses type aliases.`)

console.log('-------------------------------------------------------------------------------------------')



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

// to use Symbol as primitive, 
// es2015 needs to be added to the 'lib' key of compiler options in tsconfig.json
const ord = Symbol('orderId')

const myOrder = {
    ord: '123'
}

// DOM also needs to be included in 'lib' to use console.log
console.log(myOrder['ord'])

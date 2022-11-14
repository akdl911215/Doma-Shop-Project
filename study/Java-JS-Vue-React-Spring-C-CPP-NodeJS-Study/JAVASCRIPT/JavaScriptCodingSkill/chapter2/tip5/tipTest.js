const cart = ['apple', 'banana']
console.log('cart : ', cart) // [ 'apple', 'banana' ]

const copyCart = [...cart]
console.log('copyCoart : ', copyCart) // [ 'apple', 'banana' ]

const copyCart2 = [...cart, 'warterMellon']
console.log('copyCoart2 : ', copyCart2) // [ 'apple', 'banana', 'warterMellon' ]

console.log('cart : ', cart) // [ 'apple', 'banana' ]
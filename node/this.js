console.log(this === global) // this é intritamente igual a global? dentro no mod node é false
console.log(this === module) // this é intritamente igual a module? dentro no mod node é false

console.log(this === module.exports) // verdadeiro true
console.log(this === exports) // verdadeiro true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global) // "this" dentro da função aponta p/ global!
}
        
logThis()

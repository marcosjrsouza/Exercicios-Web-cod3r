const nome = 'Rebeca'
const concatemacao = 'Olá' + nome + '!'
const template = `
    Olá 
    ${nome} ! `
console.log(concatemacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
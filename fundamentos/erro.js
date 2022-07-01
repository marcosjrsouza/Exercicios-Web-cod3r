function tratarErroElancer(erro) {
    //throw new Error ('...')
    //throw new 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
} 

function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = {name: 'Roberto'}
imprimirNomeGritado (obj)
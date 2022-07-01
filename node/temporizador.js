const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/2 * 18 * * 0', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})


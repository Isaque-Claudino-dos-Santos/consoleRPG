import Comand from './Comand.js'

let comand = new Comand()

//comands to the consoles

comand.create('echo', (params) => {
    return params.join(' ')
}, 'Use echo [mensage] to write console')

comand.create('alert', (params) => {
    alert(params.join(' '))
    return ''
}, 'exec alert [mensage] box in the browser')

comand.create('calc', (params) => {
    let v1 = parseFloat(params[0])
    let operador = params[1]
    let v2 = parseFloat(params[2])
    let calcs = {
        ['*']: (v1, v2) => { return v1 * v2 },
        ['+']: (v1, v2) => { return v1 + v2 },
        ['-']: (v1, v2) => { return v1 - v2 },
        ['/']: (v1, v2) => { return v1 / v2 },
        ['**']: (v1, v2) => { return v1 ** v2 },
        ['%']: (v1, v2) => { return v1 % v2 },
    }
    if (operador in calcs)
        return calcs[operador](v1, v2)
    return 'type call not exitent'
}, 'make calc [number,operator,number]')

comand.create('prompt', (params) => {
    return prompt(params[0])
}, 'exec prompt [label] box with input in the browser')


//comands to the Game

comand.create('game', (params) => {
    let obj = params[0]
    let method = params[1]
    let param = params[2]

    let game = {}

    let call = {
        'state': {
            'start': () => {
                return 'start game OK'
            }
        },
        'select': {
            'player': (namePlayer) => {
                return namePlayer
            }
        }
    }

    if (obj in call && method !== undefined)
        return call[obj][method](param)

    return ''
}, 'game terminal em desenvolvimento ...')





export default comand

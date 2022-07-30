import Comand from './Comand.js'

let comand = new Comand()

comand.create('echo', (params) => {
    return params.join(' ')
}, 'Use echo [mensage] to write console')

comand.create('alert', (params) => {
    alert(params.join(' '))
    return ''
}, 'exec aler [mensage] box in the browser')

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









export default comand

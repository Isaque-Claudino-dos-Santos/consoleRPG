import Comand from './Comand.js'
import Canvas from '../../../Games/Canvas.js'

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
    return 'type calc not exitent'
}, 'make calc [number,operator,number]')

comand.create('prompt', (params) => {
    return prompt(params[0])
}, 'exec prompt [label] box with input in the browser')

comand.create('pint', () => {
    let canvas = new Canvas(600, 300)

    canvas.canvas.addEventListener('mousemove', (ev) => {
        let x = ev.offsetX
        let y = ev.offsetY

        canvas.context.beginPath()
        canvas.context.fillStyle = 'red'
        canvas.context.arc(x, y, 5, 0, Math.PI * 2)
        canvas.context.fill()
    })
    return canvas.canvas
},'view canavas to draw')





export default comand

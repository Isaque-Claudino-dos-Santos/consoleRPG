import help from "./help.js"

let comand = {
    echo: (params) => {
        return params.join(' ')
    },

    help(params) {
        let text = ' <h3>HELP!</h3>'
        if (params[0] === '' || params.length === 0) {
            text += help.all()
        } else {
            text += help[params[0]]()
        }
        return text
    },

    call(method, params) {
        if (method === '') { method = 'help' }

        if (method in this && method !== 'call') {
            let res = this[method](params)
            return res
        }
        return 'Comando <span class="error">' + method + '</span> não encontrado'
    }
}
export default comand
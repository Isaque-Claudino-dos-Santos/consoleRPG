class Comand {
    #listComands = {}

    constructor() { }

    get listComands() {
        return this.#listComands
    }

    create(name, method, help) {
        help = `<span style="color: purple">${name}</span> ${help} <hr><br>`
        this.listComands[name] = { method, help }
    }

    helpAll() {
        let text = ''
        for (const key in this.listComands) {
            let comand = this.listComands[key]
            let help = comand.help
            text += help
        }
        return text
    }

    call(comand, params) {
        if (comand === 'help') {
            if (params[0] !== undefined) {
                return this.listComands[params[0]]['help']
            } else {
                return this.helpAll()
            }
        }

        if (comand in this.listComands)
            return this.listComands[comand]['method'](params, this)

        return 'Comand ' + comand + ' not exist'
    }
}

export default Comand
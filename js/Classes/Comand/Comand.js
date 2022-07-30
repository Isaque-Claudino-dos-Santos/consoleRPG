class Comand {
    static listComands = {}

    constructor() { }

    create(name, method, help) {
        help = `<span style="color: purple">${name}</span> ${help} <hr><br>`
        Comand.listComands[name] = { method, help }
    }

    helpAll() {
        let text = ''
        for (const key in Comand.listComands) {
            let comand = Comand.listComands[key]
            let help = comand.help
            text += help
        }
        return text
    }

    call(comand, params) {
        if (comand === 'help') {
            if (params[0] !== undefined) {
                return Comand.listComands[params[0]]['help']
            } else {
                return this.helpAll()
            }
        }

        if (comand in Comand.listComands)
            return Comand.listComands[comand]['method'](params)

        return 'Comand ' + comand + ' not exist'
    }
}

export default Comand
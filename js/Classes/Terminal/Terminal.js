class Terminal {
    #terminal = document.querySelector('.terminal')
    #inputs = this.#findInputs()
    #line = 1
    #request = {}

    constructor() {
        this.#terminalClick()
        this.#submitInputAdd()
    }

    get terminal() {
        return this.#terminal
    }

    get inputs() {
        return this.#inputs
    }

    set inputs(value) {
        this.#inputs = value
    }

    get line() {
        return this.#line
    }

    set line(value) {
        this.#line = value
    }

    get request() {
        return this.#request
    }

    set request(value) {
        this.#request = value
    }



    #findInputs() {
        return document.querySelectorAll('.terminal .line input')
    }

    #terminalClick() {
        this.terminal.addEventListener('click', (event) => {
            this.#selectInput()
        })
    }


    #selectInput() {
        this.inputs.forEach(input => {
            input.select()
        })
    }

    #disableInput() {
        this.inputs.forEach((input) => {
            input.disabled = true
        })
    }

    #valueInput() {
        let value = ''
        this.inputs.forEach((input) => {
            value = input.value
        })

        return value
    }

    #createNewLine() {
        this.line++
        let newLine = document.createElement('div')
        newLine.className = `line line_${this.line}`

        let request = document.createElement('div')
        request.className = 'request'

        let span = document.createElement('span')
        span.textContent = this.line

        let input = document.createElement('input')
        input.type = 'text'

        request.appendChild(span)
        request.appendChild(input)

        let response = document.createElement('div')
        response.className = 'response'

        newLine.appendChild(request)
        newLine.appendChild(response)

        this.terminal.appendChild(newLine)

        this.inputs = this.#findInputs()
    }

    #eventSubmit = (event) => {
        if (event.key !== 'Enter') return

        this.#preprareRequest(this.#valueInput())
        this.execute()
        this.#disableInput()
        this.#createNewLine()
        this.#submitInputRemove()
        this.#submitInputAdd()
        this.#selectInput()
    }

    #submitInputAdd() {
        this.inputs.forEach((input) => {
            input.addEventListener('keydown', this.#eventSubmit)
        })
    }

    #submitInputRemove() {
        this.inputs.forEach((input) => {
            input.removeEventListener('keydown', this.eventSubmit)
        })
    }

    #preprareRequest(request) {
        let arrayRequest = request.split(' ')
        let comand = arrayRequest[0]
        let params = arrayRequest.splice(1)

        this.request = {
            line: this.line,
            comand,
            params,
        }
    }


    setResponse(valor) {
        if (typeof valor === 'object') {
            document.querySelector('.terminal .line_' + this.line + ' .response').appendChild(valor)
        } else {
            document.querySelector('.terminal .line_' + this.line + ' .response').innerHTML = valor
        }
    }

    //substituir 
    execute = () => { }
}


export default Terminal






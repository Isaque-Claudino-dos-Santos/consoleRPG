"use strict";

import comand from './Classes/Terminal/Comand/create.js';
import Terminal from './Classes/Terminal/Terminal.js'

let terminal = new Terminal()

terminal.execute = () => {
    let req = terminal.request
    let res = comand.call(req.comand, req.params)

    terminal.setResponse(res)
}



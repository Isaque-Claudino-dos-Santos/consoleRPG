"use strict";

import comand from './Classes/Terminal/comand.js';
import Terminal from './Classes/Terminal/Terminal.js'
import { players, enimys, items, storeFind } from "./store.js";


let p = storeFind('isaque', players)

p.getItem(storeFind('coins', items))
p.getItem(storeFind('smal sword', items))


let terminal = new Terminal()

terminal.execute = () => {
    let req = terminal.request
    let res = comand.call(req.comand, req.params)

    terminal.setResponse(res)
}



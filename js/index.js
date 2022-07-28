"use strict";

import { players, enimys, items, storeFind } from "./store.js";


let p = players[0]

p.getItem(storeFind('coins', items))


console.log(p.element('body'))

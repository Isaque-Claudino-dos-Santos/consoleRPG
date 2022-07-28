"use strict";

import { players, enimys, items, storeFind } from "./store.js";


let p = storeFind('isaque', players)

p.getItem(storeFind('coins', items))
p.getItem(storeFind('smal sword', items))



p.element('body')



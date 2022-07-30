import Player from "./Classes/Entitys/Player.js"
import Enimy from "./Classes/Entitys/Enimy.js"
import Coins from "./Classes/Items/Coins.js"
import Sword from "./Classes/Items/Sword.js"


const players = []

players.push(
    new Player('isaque', 10, 3, 0)
)


const items = []

items.push(
    new Coins('coins', 'Use to negotiation in the market', 1),
    new Sword('smal sword', 'Increment Attack of the player', 2, 1)
)


const enimys = []

enimys.push(
    new Enimy('slime', 5, 2, 0)
)

function storeFind(name, array) {
    let obj = array.filter(value => { return value.name === name })[0]
    return obj
}

function storeNames(array) {
    return array.map(value => {
        return value.name
    })
}

export { players, items, enimys, storeFind, storeNames }
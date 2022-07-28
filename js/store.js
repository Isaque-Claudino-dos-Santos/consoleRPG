import Player from "./Classes/Entitys/Player.js"
import Enimy from "./Classes/Entitys/Enimy.js"
import Coins from "./Classes/Items/Coins.js"


const players = []

players.push(new Player('isaque', 10, 3, 0))


const items = []

items.push(new Coins('coins', 'Use to negotiation in the market', 1))


const enimys = []

enimys.push(new Enimy('slime', 5, 2, 0))


export default { players, items, enimys }
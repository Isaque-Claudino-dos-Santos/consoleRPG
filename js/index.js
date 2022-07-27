import Player from "./Classes/Entitys/Player.js";
import Enimy from "./Classes/Entitys/Enimy.js";
import Game from "./Classes/Game.js";
import Coins from "./Classes/Items/Coins.js";

let c = new Coins('coins', 'Use to negotiation in the market', 1)

let player = new Player('isaque', 10, 2, 0)
let game = new Game(player)

player.getItem(c)
player.getItem(c)

console.log(player)

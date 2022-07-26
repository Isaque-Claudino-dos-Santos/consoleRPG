import Player from "./Classes/Player.js";
import Enimy from "./Classes/Enimy.js";
import Game from "./Classes/Game.js";


let player = new Player('isaque', 10, 2, 0)
let slime = new Enimy('slime', 5, 1, 0)

player.strick(slime)

let game = new Game(player)

console.table(player)
console.table(slime)
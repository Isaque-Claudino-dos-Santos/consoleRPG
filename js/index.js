import Player from "./Classes/Player.js";
import Enimy from "./Classes/Enimy.js";

let player = new Player('isaque', 10, 2, 0)
let slime = new Enimy('slime', 5, 1, 0)


console.table([slime, player])
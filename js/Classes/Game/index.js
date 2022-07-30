import Game from "./Game.js";

//import items class
import Coins from './Items/Coins.js'
import Sword from './Items/Sword.js'

let game = new Game()

game.items.push(new Coins('coins', 'Use for trending', 1))
game.items.push(new Sword('smal sword', 'add +1 attack', 2, 1))
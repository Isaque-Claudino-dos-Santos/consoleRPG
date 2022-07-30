import Player from "./Entitys/Player.js"
import Enimy from "./Entitys/Enimy.js"
import Item from "./Items/Item.js"

class Game {
    #players = []
    #enimys = []
    #items = []

    constructor() { }

    get player() {
        return this.#players
    }

    get enimys() {
        return this.#enimys
    }

    get items() {
        return this.#items
    }

    createPlayer(name, lifes, attack, defense) {
        this.player.push(new Player(name, lifes, attack, defense))
    }

    createEnimy(name, lifes, attack, defense) {
        this.enimys.push(new Enimy(name, lifes, attack, defense))
    }
}

export default Game
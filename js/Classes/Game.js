import Player from "./Entitys/Player.js"

class Game {
    constructor(player) {
        if (!(player instanceof Player)) throw 'The constructor param not is a Player instance'



    }
}

export default Game
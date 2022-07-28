import Entity from "./Entity.js";

class Player extends Entity {
    constructor(name, life, attack, defense) {
        super(name, life, attack, defense)
        this.type = 'player'
    }
}

export default Player
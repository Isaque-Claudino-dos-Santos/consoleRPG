import Entity from "./Entity.js";

class Enimy extends Entity {
    constructor(name, life, attack, defense) {
        super(name, life, attack, defense)
        this.type = 'enimy'
    }
}

export default Enimy
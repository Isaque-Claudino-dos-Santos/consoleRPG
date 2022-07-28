import Item from "./Item.js";

class Sword extends Item {
    #force = 0
    constructor(name, description, price, force) {
        super(name, description, price)
        this.#force = force
    }

    get force() {
        return this.#force
    }
}

export default Sword
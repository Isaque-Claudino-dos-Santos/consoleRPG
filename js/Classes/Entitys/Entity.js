import Element from "../Element.js"
import Inventory from "../Inventory.js"

class Entity extends Inventory {
    #name = ''
    #lifes = 0
    #minLifes = 1
    #attack = 0
    #defense = 0
    #isDead = true
    #type = ''

    constructor(name, lifes, attack, defense) {
        super()
        this.#name = name
        this.#lifes = lifes
        this.#attack = attack
        this.#defense = defense
        this.#isDead = this.checkIsDead()
    }

    get name() { return this.#name }

    get lifes() { return this.#lifes }

    get minLifes() { return this.#minLifes }

    get attack() { return this.#attack }

    get defense() { return this.#defense }

    get isDead() { return this.#isDead }
    set isDead(value) { this.#isDead = value }

    get type() {
        return this.#type
    }
    set type(value) {
        this.#type = value
    }

    element(whoAppend = '') {
        const tag = new Element()

        let name = tag.h1(`${this.name}`, `${this.type} name`)
        let lifes = tag.p(`Life: ${this.lifes}`, `${this.type} lifes`)
        let attack = tag.p(`Attack: ${this.attack}`, `${this.type} attack`)
        let defense = tag.p(`Defense: ${this.defense}`, `${this.type} defense`)

        let container = tag.div(`entity ${this.type} ${this.name}`, [name, lifes, attack, defense])

        this.inventoryElement(container)

        if (whoAppend === '')
            return container

        let append = tag.get(whoAppend)
        append.appendChild(container)
    }

    checkIsDead() {
        if (this.lifes >= this.minLifes) return false
        return true
    }

    removeLifes(amount) {
        this.#lifes -= amount
    }

    strick(who) {
        who.removeLifes(this.attack)
    }
}

export default Entity
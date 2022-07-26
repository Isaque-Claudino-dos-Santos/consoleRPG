class Entity {
    #name = ''
    #lifes = 0
    #minLifes = 1
    #attack = 0
    #defense = 0
    #isDead = true

    constructor(name, lifes, attack, defense) {
        this.#name = name
        this.#lifes = lifes
        this.#attack = attack
        this.#defense = defense
        this.#isDead = this.#checkIsDead()
    }

    get name() { return this.#name }

    get lifes() { return this.#lifes }

    get minLifes() { return this.#minLifes }

    get attack() { return this.#attack }

    get defense() { return this.#defense }

    get isDead() { return this.#isDead }
    set isDead(value) { this.#isDead = value }

    #checkIsDead() {
        if (this.lifes >= this.minLifes) return false
        return true
    }

    #removeLifes(amount) {
        this.#lifes -= amount
    }

}

export default Entity
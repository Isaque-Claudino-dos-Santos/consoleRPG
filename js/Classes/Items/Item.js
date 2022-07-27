class Item {
    #name = ''
    #description = ''
    #price = 0
    #amount = 0

    constructor(name, description, price) {
        this.#name = name
        this.#description = description
        this.#price = price
    }

    get name() {
        return this.#name
    }

    get description() {
        return this.#description
    }

    get price() {
        return this.#price
    }

    get amount() {
        return this.#amount
    }

    set amount(value) {
        this.#amount = value
    }

    incrementAmount(amount) {
        this.amount += amount
    }

    decrementAmount(amount) {
        this.amount -= amount
    }
}

export default Item
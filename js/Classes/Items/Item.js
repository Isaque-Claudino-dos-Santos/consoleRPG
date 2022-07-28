class Item {
    #name = ''
    #description = ''
    #price = 0
    #minAmount = 1
    #amount = 1

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

    get minAmount() {
        return this.#minAmount
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
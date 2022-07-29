import Item from './Items/Item.js'

class Inventory {
    #inventory = {}

    get inventory() {
        return this.#inventory
    }

    #existInTheInventory(itemName) {
        if (this.inventory[itemName] === undefined) return false
        return true
    }

    #stakeItem(item, amount) {
        this.inventory[item.name].incrementAmount(amount)
    }

    #saveItem(item) {
        this.inventory[item.name] = item
    }

    #deleteItem(item) {
        delete this.inventory[item.name]
    }

    getItem(item, amount = 1) {
        if (!(item instanceof Item)) return

        this.#saveItem(item)
        this.#stakeItem(item, amount - 1)
    }

    useItem(item) {
        item.amount = 'isaque'
    }

    dropItem(item, amount = 1) {
        if (!this.#existInTheInventory(item.name)) return

        item.decrementAmount(amount)

        if (item.amount < item.minAmount)
            this.#deleteItem(item)
    }
}

export default Inventory
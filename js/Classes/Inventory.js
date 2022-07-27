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

    getItem(item) {
        if (!(item instanceof Item)) return

        if (this.#existInTheInventory(item.name)) {
            this.inventory[item.name].incrementAmount(1)
            return
        }

        this.inventory[item.name] = item
    }
}

export default Inventory
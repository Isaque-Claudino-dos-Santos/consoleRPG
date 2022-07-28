import Element from './Element.js'
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

    dropItem(item, amount = 1) {
        if (!this.#existInTheInventory(item.name)) return

        item.decrementAmount(amount)

        if (item.amount < item.minAmount)
            this.#deleteItem(item)
    }

    inventoryElement(elementNode = '') {
        const tag = new Element()

        let arrayItemsElement = []

        for (const key in this.inventory) {
            let item = this.inventory[key]

            let name = tag.p(`${item.name}`, `item name`)
            let amount = tag.p(`Amount: ${item.amount}`, `item amount`)
            let price = tag.p(`Price: ${item.price}`, `item price`)
            let containerItem = tag.div(`inventory item ${item.name}`, [name, amount, price])

            arrayItemsElement.push(containerItem)
        }

        let container = tag.div(`${this.type} ${this.name} inventory`, arrayItemsElement)

        if (elementNode !== '')
            elementNode.appendChild(container)
        return container
    }
}

export default Inventory
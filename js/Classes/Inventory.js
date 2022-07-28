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

    useItem(item) {
        item.amount = 'isaque'
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
            let elements = []

            elements.push(
                tag.h1(`${item.name}`, `item name`),
                tag.p(`Amount: ${item.amount}`, `item amount`),
                tag.p(`Price: ${item.price}`, `item price`)
            )

            if (item.force !== undefined) {
                elements.push(tag.p(`Force: ${item.force}`, `item force`))
            }

            elements.push(tag.button('Use', 'item button use', this, 'useItem', item))
            elements.push(tag.button('Drop', 'item button drop', this, 'dropItem', item))

            let containerItem = tag.div(`content_item ${item.name}`, elements)

            arrayItemsElement.push(containerItem)
        }

        let container = tag.div(`${this.type} ${this.name} inventory`, arrayItemsElement)

        if (elementNode !== '')
            elementNode.appendChild(container)
        return container
    }
}

export default Inventory
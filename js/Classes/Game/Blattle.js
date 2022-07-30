import Entity from './Entitys/Entity.js'

class Battle {
    #player = {}
    #opponent = {}
    #currentPlay = {}

    constructor(player, opponent) {
        if (!(player instanceof Entity) || !(opponent instanceof Entity)) return

        this.#player = player
        this.#opponent = opponent
        this.currentPlay = player
    }

    get player() {
        return this.#player
    }

    get opponent() {
        return this.#opponent
    }

    get currentPlay() {
        return this.#currentPlay
    }

    set currentPlay(value) {
        this.#currentPlay = value
    }

    execute(action) {
        console.log(this.currentPlay,action)
    }
}

export default Battle
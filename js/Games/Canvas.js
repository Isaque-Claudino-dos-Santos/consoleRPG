class Canvas {
    canvas = document.createElement('canvas')
    context = this.canvas.getContext('2d')

    constructor() {
        this.canvas.style = "border: 1px solid"
        return this.canvas
    }

    fillRect(x, y, w, h, c) {
        this.context.fillStyle = c
        this.context.fillRect(x, y, w, h)
    }

    strokeRect(x, y, w, h, c) {
        this.context.strokeStyle = c
        this.context.strokeRect(x, y, w, h)
    }


}

export default Canvas
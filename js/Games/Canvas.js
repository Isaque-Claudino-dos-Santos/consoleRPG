class Canvas {
    canvas = document.createElement('canvas')
    context = this.canvas.getContext('2d')

    constructor() {
        this.canvas.style = "border: 1px solid"
        return this.canvas
    }


}

export default Canvas
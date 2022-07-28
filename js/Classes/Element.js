class Element {
    #appendChildes(element, arrayChilds) {
        arrayChilds.forEach(child => {
            element.appendChild(child)
        });
    }

    get(query) {
        return document.querySelector(query)
    }

    div(className, arrayChilds = []) {
        let element = document.createElement('div')
        element.className = className
        if (arrayChilds !== [])
            this.#appendChildes(element, arrayChilds)
        return element
    }

    p(textContent, className) {
        let element = document.createElement('p')
        element.className = className
        element.textContent = textContent
        return element
    }

    h1(textContent, className) {
        let element = document.createElement('h1')
        element.className = className
        element.textContent = textContent
        return element
    }

    button(textContent, className, context, method, param) {
        let element = document.createElement('button')
        element.className = className
        element.textContent = textContent
        element.onclick = () => {
            context[method](param)
        }
        return element
    }

}

export default Element
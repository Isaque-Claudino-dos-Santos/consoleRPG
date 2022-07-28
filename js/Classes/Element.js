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
}

export default Element
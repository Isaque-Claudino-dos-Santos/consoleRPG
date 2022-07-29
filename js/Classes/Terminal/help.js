let help = {
    create(comand, mensage) {
        return `
        <hr/>
        <span class="help_comand">${comand}</span> <br/>
        <span class="help_mensage">${mensage}</span>
        <hr/>
        `
    },

    help() {
        return this.create('help [&lt;comand&gt;]', 'learn more about commands ')
    },

    echo() {
        return this.create('echo [&lt;mensage&gt;]', 'Write mensage')
    },

    all() {
        return `
        
        <br/>
        ${this.echo()}
        <br/>
        ${this.help()}
        <br/>
        
        `
    }
}

export default help
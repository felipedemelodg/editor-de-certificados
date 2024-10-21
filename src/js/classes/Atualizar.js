import { nomeNoCertificado } from "../elementos/elementos.js"

export class Atualizar {
    constructor() {
        this.container = null
        this.elemento = null
        this.texto = null
    }
    static pegaContainer(container) {
        const atualizar = new Atualizar()
        atualizar.container = container
        atualizar.#pegaElemento()
        atualizar.#pegaTexto()
        atualizar.#mostraTexto()
    }
    #pegaElemento() {
        this.elemento = (this.container.children[0])
    }
    #pegaTexto() {
        this.elemento.addEventListener('input', () => {
            this.texto = this.elemento.value
        })
    }
    #mostraTexto() {
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.#passarTextoParaContainer()
                if (this.container.classList.contains('nome')) {
                    nomeNoCertificado.innerHTML = this.texto
                }
            }
        })
    }
    #passarTextoParaContainer() {
        this.container.textContent = this.texto
    }
}
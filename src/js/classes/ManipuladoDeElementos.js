import { pegarEstilo } from "../fns/aplicarClasse.js"
import { verAClasse } from "../fns/verAClasse.js"
import { verSeExcecao } from "../fns/verSeExcecao.js"
import { Atualizar } from "./Atualizar.js"

export class ManipuladoDeElementos {
    constructor() {
        this.container = null
        this.input = null
        this.classe = null
        this.estilos = null
    }

    static pegarElemento(elemententoHTML) {
        const manipulador = new ManipuladoDeElementos()
        manipulador.container = elemententoHTML
        manipulador.#verAClasse()
        if (!manipulador.#excecoes()) {
            manipulador.#apagarTextoDoContainer()
            manipulador.#criarInput()
            manipulador.#guardaInputNoContainer()
            manipulador.#pegarEstilos()
            manipulador.#aplicarEstilo()
            manipulador.#tipoTexto()
            manipulador.#focar()
            Atualizar.pegaContainer(manipulador.container)
        } else { }

    }
    #verAClasse() {
        const classe = verAClasse(this.container)
        this.classe = classe
    }
    #excecoes() {
        return verSeExcecao(this.classe)
    }
    #apagarTextoDoContainer() {
        this.container.textContent = ''
    }

    #criarInput() {
        this.input = document.createElement('input')
    }

    #guardaInputNoContainer() {
        this.container.appendChild(this.input)
    }
    #pegarEstilos() {
        this.estilos = pegarEstilo(this.classe)
    }
    #aplicarEstilo() {
        this.estilos.forEach(estilo => {
            this.input.classList.add(estilo)
        })
    }
    #focar() {
        this.input.focus()
    }
    #tipoTexto() {
        this.input.type = 'text'
    }

}
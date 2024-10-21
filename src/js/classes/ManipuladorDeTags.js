export class ManipuladorDeTag {
    constructor() {
        this.rastrear = this.#rastrear.bind(this)
    }


    #iniciarRastreio() {
        document.addEventListener('click', this.rastrear)
    }
    #paraRastreio() {
        document.removeEventListener('click', this.rastrear)
    }
    #rastrear(event) {
        return event.target
    }


}

// #quandoClicar(fn) {
//     this.ondeEleVaiFica.addEventListener('click', fn)
// }
// #pegueElementoClicado(e) {
//     return e.target
// }
// apagarConteudo() {
//     this.#quandoClicar((e) => {
//         this.#pegueElementoClicado(e).textContent = ''
//     })
// }
// pegarElemento() {
//     this.#quandoClicar((e) => {
//         const elemento = this.#pegueElementoClicado(e)
//         return elemento
//     })
// }
// crieElementoColoqueOndeEleVaiFicar() {
//     this.#quandoClicar((e)=>{
//         const pai = this.#pegueElementoClicado(e)
//         const elemento = document.createElement(this.nomeTag)
//         return pai.appendChild(elemento)
//     })
// }
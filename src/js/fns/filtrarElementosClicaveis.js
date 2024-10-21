import { ManipuladoDeElementos } from "../classes/ManipuladoDeElementos.js"

export function filtraElementosClicaveis() {
    let elemententoHTML = ""
    document.addEventListener('click', (e) => {
        if (e.target.style.pointerEvents === 'auto') {
            elemententoHTML = e.target
            // console.log(elemententoHTML)
            ManipuladoDeElementos.pegarElemento(elemententoHTML)
        }
    })
}


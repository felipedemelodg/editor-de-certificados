import { clicaveis, todosElemento } from "../elementos/elementos.js";

export function marcarElementosClicaveis() {

    todosElemento.forEach((elemento) => {
        let eClicavel = false
        clicaveis.forEach(classes => {
            if (elemento.classList.contains(classes)) {
                eClicavel = true
                elemento.id = 'entrada-' + classes
            }
        })
        if (!eClicavel) {
            elemento.style.pointerEvents = 'none'
        } else {
            elemento.style.pointerEvents = 'auto'
            elemento.style.cursor = 'pointer'

        }
    });
}
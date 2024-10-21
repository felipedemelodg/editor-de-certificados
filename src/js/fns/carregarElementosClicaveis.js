import { nrs } from "../elementos/elementos.js"
import { carregarDados } from "./carregarDadosNrs.js"
import { filtraElementosClicaveis } from "./filtrarElementosClicaveis.js"
import { marcarElementosClicaveis } from "./marcarElementosClicaveis.js"

export function carregarElementoClicaveis() {
    window.onload = () => {
        marcarElementosClicaveis()
        filtraElementosClicaveis()
        carregarDados()
    }
}
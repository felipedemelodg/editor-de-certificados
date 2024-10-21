import { listaExcecoes } from "../elementos/elementos.js"

export function verSeExcecao(classe) {
    return listaExcecoes.some(el => el == classe)

}
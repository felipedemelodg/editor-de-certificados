import { nrCertificado, nrs } from "../elementos/elementos.js"

export async function carregarDados() {
    try {
        const resposta = await fetch('src/dados/nrs.json')
        if (!resposta.ok) {
            throw new Error('Erro HTTP ' + resposta.status)
        }
        const data = await resposta.json()
        let numeros = data.NormasRegulamentadoras.map(normas => normas.numero)
        let titulos = data.NormasRegulamentadoras.map(normas => normas.titulo)

        numeros.forEach(numero => {
            const option = document.createElement('option')
            option.value = numero
            option.innerText = numero
            nrs.selectedIndex = 0
            nrs.appendChild(option)
        })
        let indice = nrs.selectedIndex
        let textoAnterior = 'participou do Treinamento de Segurança do Trabalho em: '
        let textoPosterior = ' em conformidade com a: '
        nrCertificado.textContent = textoAnterior + titulos[indice]+", "+ textoPosterior + numeros[indice] + ", "

        nrs.addEventListener('input', () => {
            nrCertificado.textContent = textoAnterior + titulos[nrs.selectedIndex] + textoPosterior + numeros[indice] + ", "
        })
        nrCertificado
    } catch (error) {
        console.log(error)
        return null
    }
}
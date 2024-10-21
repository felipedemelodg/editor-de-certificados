export const nome = document.querySelector('.nome')
export const nomeNoCertificado = document.querySelector('.nomeNoCertificado')
export const cpf = document.querySelector('.CPF')

export const textoComplementar = document.querySelector('.textoComplementar')
export const nomeCpf = document.querySelector('.nomeCpf')
export const nrCertificado = document.querySelector('.nrCertificado')
export const dataNoTexto = document.querySelector('.dataNoTexto')
export const nrs = document.querySelector('.nrs')
export const textoMedalha = document.querySelector('.textoMedalha')
export const promovidoPor = document.querySelector('.promovidoPor')
export const cargaHoraria = document.querySelector('.cargaHoraria')


const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');

export const dataFormatada = `${ano}-${mes}-${dia}`;

export const todosElemento = (document.querySelectorAll("*"))
export const clicaveis = [
    "nome",
    "CPF",
    // "nomeNoCertificado",
    // "textoComplementar",
    // "nrCertificado",
    "nrs",
    "dataNoTexto",
    "promovidoPor",
    "cargaHoraria",
    "nomeInstrutor",
    "rgInstrutor",
    "certificacaoInstrutor"
];
export const listaExcecoes = [
    "nrs", "dataNoTexto"
]
export const validaElemento = {
    elementoCriado: false,
}
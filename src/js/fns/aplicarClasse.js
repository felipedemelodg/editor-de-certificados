export function pegarEstilo(classe) {
    if (classe === "nome") {
        return ['campo', 'nome', 'placeholderNomeTituloEstilo', 'remover']
    } else if (classe === "CPF") {
        return ['campo', 'CPF']
    } else if (classe === "nomeNoCertificado") {
        return ['nomeNoCertificado']
    } else if (classe === "textoComplementar") {
        const elemento = document.querySelector("." + "textoComplementar");
    } else if (classe === "nrCertificado") {
        const elemento = document.querySelector("." + "nrCertificado");
    } else if (classe === "nrs") {
        return ['nrs']
    } else if (classe === "dataNoTexto") {
        const elemento = document.querySelector("." + "dataNoTexto");
    } else if (classe === "promovidoPor") {
        const elemento = document.querySelector("." + "promovidoPor");
    } else if (classe === "cargaHoraria") {
        const elemento = document.querySelector("." + "cargaHoraria");
    } else if (classe === "nomeInstrutor") {
        const elemento = document.querySelector("." + "nomeInstrutor");
    } else if (classe === "rgInstrutor") {
        const elemento = document.querySelector("." + "rgInstrutor");
    } else {
        const elemento = document.querySelector("." + "certificacaoInstrutor");
    }
}
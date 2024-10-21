export function verAClasse(elemento) {
    if (elemento.classList.contains("nome")) {
        return ("nome");
    } else if (elemento.classList.contains("CPF")) {
        return ("CPF");
    } else if (elemento.classList.contains("nomeNoCertificado")) {
        return ("nomeNoCertificado");
    } else if (elemento.classList.contains("textoComplementar")) {
        return ("textoComplementar");
    } else if (elemento.classList.contains("nrCertificado")) {
        return ("nrCertificado");
    } else if (elemento.classList.contains("nrs")) {
        return ("nrs");
    } else if (elemento.classList.contains("dataNoTexto")) {
        return ("dataNoTexto");
    } else if (elemento.classList.contains("promovidoPor")) {
        return ("promovidoPor");
    } else if (elemento.classList.contains("cargaHoraria")) {
        return ("cargaHoraria");
    } else if (elemento.classList.contains("nomeInstrutor")) {
        return ("nomeInstrutor");
    } else if (elemento.classList.contains("rgInstrutor")) {
        return ("rgInstrutor");
    } else {
        return ("certificacaoInstrutor");
    }

}
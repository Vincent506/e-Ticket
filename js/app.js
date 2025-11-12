function comprar(){
    let typeTicket = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (typeTicket == 'inferior') {
        comprarInferior(quantidade);
    }else if(typeTicket == 'pista'){
        comprarPista(quantidade);
    }else if (typeTicket == 'superior') {
        comprarSuperior(quantidade);
    }

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd>qtdPista) {
        alert('Quantidade de ingressos indisponivel');
    }else{
        qtdPista = qtdPista-qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd>qtdInferior) {
        alert('Quantidade de ingressos indisponivel');
    }else{
        qtdInferior = qtdInferior-qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
    return qtdInferior;
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd>qtdSuperior) {
        alert('Quantidade de ingressos indisponivel');
    }else{
        qtdSuperior = qtdSuperior-qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
    return qtdSuperior;
}

}
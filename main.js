
const container = document.getElementById('container')

function ativarBotao() {

    const valorDigitado = document.getElementById("valorDigitado").value
    const quantidadeContainer = [valorDigitado]

    TempoCalculado =  calcularTempo(quantidadeContainer).join(':')
    removerElementoAntigo()
    imprimirNaTela(TempoCalculado)
}

function calcularTempo (x) {
    
    x.map(Number)
    
    let totalSegundos = x * 30;
    let horas = Math.floor(totalSegundos / 3600);
    let minutos = Math.floor((totalSegundos % 3600) / 60);
    let segundos = totalSegundos % 60;
    let TempoNoArray = [horas, minutos, segundos].map(String)
    
    for(let i = 0; i < TempoNoArray.length; i++){
        TempoNoArray[i] = adicionarZero(TempoNoArray[i])
    }

    return TempoNoArray
}

function adicionarZero(string) {
    if (string.length === 1) {
      return "0" + string;
    }
    return string;
  }

function imprimirNaTela(ArrayString){
    
    let novoElemtento = document.createElement("h1")
    novoElemtento.innerHTML = `Tempo total de inspeção: ${ArrayString} `
    novoElemtento.classList.add("tempo-de-inspecao")
    container.appendChild(novoElemtento)
    novoElemtento.id = "meuElemento"
}

function removerElementoAntigo(){
    let elementoAntigo = document.getElementById("meuElemento")
    if(elementoAntigo){
        elementoAntigo.remove()
    }
}

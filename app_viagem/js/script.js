//DOM
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco_combustivel = document.querySelector('#preco_combustivel')
const botao = document.querySelector('#botao')
const inf = document.querySelector('#informacao')
const gasto = document.querySelector('#preco')

//Evento
botao.addEventListener('click', gasto_viagem)



//Ação
function gasto_viagem(){
    d = Number(distancia.value)
    c = Number(consumo.value)
    pc = Number(preco_combustivel.value) 
    formula = (d/c)*pc
    inf.textContent = `O valor total da sua viagem será:`
    gasto.textContent = `R$ ${formula.toFixed(2)}`
}

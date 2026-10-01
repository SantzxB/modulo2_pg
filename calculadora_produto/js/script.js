//DOM
const preco = document.querySelector('#preco')
const quantidade = document.querySelector('#quantidade')
const desconto = document.querySelector('#desconto')
const bt = document.querySelector('#botao')
const valor_final = document.querySelector('#valor_final')

//Evento

bt.addEventListener('click', calcular)

//Ação

function calcular(){
    p = Number(preco.value)
    q= Number(quantidade.value)
    d=Number(desconto.value)
    subtotal = (p*q)
    calculo_final = subtotal * (d/100)
    valor_final.textContent = `Valor Final: ${calculo_final.toFixed(2)}`
}

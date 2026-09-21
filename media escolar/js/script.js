
//DOM
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const butao = document.querySelector('#btcalcular')
const resultado = document.querySelector('#resultado')
const situacao = document.querySelector('#resultado2')

//evento

butao.addEventListener('click', calcular)

//Ação

function calcular() {
    const n1 = Number(nota1.value)
    const n2 = Number(nota2.value)
    const n3 = Number(nota3.value)

    const media = (n1 + n2 + n3) / 3

    resultado.textContent = `A sua Média é ${media.toFixed(2)}`

    if (media < 7) {
        situacao.textContent = `Reprovado 😥`
    } else {
        situacao.textContent = `Aprovado 🤩`
    }
}
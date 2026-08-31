const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')
const central = document.querySelector('.central')


btligar.addEventListener('click', ligar)
btdesligar.addEventListener('click', desligar)


function ligar() {

    lampada.src = 'img/lampada-acesa.png'

    document.body.style.backgroundColor = 'white'
    central.style.backgroundColor = 'white'
}


function desligar() {

    lampada.src = 'img/lampada-apagada.png'

    document.body.style.backgroundColor = 'black'
    central.style.backgroundColor = 'black'
}
//DOM
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btIMC = document.querySelector('#btIMC')
const inf1 = document.querySelector('#resultado')
const inf2= document.querySelector('#resultado2')

//EVENTO

btIMC.addEventListener('click', imc)

//ÇÃO

function imc(){

    p = Number(peso.value)
    a = Number(altura.value)
    calculo = p/(a*a)
    inf1.textContent = `O seu IMC é ${calculo.toFixed(2)}`

    if(calculo<18.5){
        inf2.textContent =`Abaixo do Peso😐`
    }else if(calculo>=18.5 && calculo<25){
        inf2.textContent = `Peso Ideal🤩`
    }else if(calculo>=25&& calculo<30){
        inf2.textContent = `Levemente Acima do Peso😯`
    }else{
        inf2.textContent = `Você está com obesidade😭`
    }
}
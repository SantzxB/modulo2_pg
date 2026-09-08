//DOM

const hora = document.querySelector('#hours')
const minuto = document.querySelector('#minutes')
const segundo = document.querySelector('#seconds')

//eventos

setInterval(relogio, 1000)



//Ação

function relogio(){

    hoje = new Date()
    hour = hoje.getHours()
    minute = hoje.getMinutes()
    second = hoje.getSeconds()

    if(hour<10){
        hour = '0'+ hour
    }

    if(minute<10){
        minute = '0'+ minute
    }
    
    if(second<10){
        second= '0'+ second
    }





    hora.textContent = hour
    minuto.textContent = minute
    segundo.textContent = second
}
//DOM
const capa = document.querySelector ('#capa')
const sinopse =document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

//EVENTO

bt1.addEventListener('click', avatar)
bt2.addEventListener('click', aranha)
bt3.addEventListener('click', deadpool)
bt4.addEventListener('click', ghost)



//AÇÃO
function avatar(){
    capa.src ='img/images.jpg'
    sinopse.textContent = 'Após anos de paz, Jake Sully e Ney tiri formaram uma grande família. No entanto, a antiga ameaça da corporação humana RDA retorna a Pandora para colonizar o planeta e caçar Jake. Para proteger sua tribo original (os Omatikaya), a família Sully se exila e busca refúgio nos atóis distantes de Pandora, lar do clã costeiro Metkayina. Lá, eles precisam aprender a se adaptar ao modo de vida marítimo enquanto se preparam para uma nova guerra inevitável contra os humanos.'
}
function aranha(){
    capa.src ='img/images 2.jpg'
    sinopse.textContent = ' Quatro anos após os eventos de Sem Volta para Casa, Peter Parker vive isolado em um mundo que esqueceu sua verdadeira identidade. Ele se dedica integralmente a ser o Homem-Aranha em tempo integral. O estresse de sua vida dupla engatilha uma mutação física perigosa, enquanto ele precisa lidar com novas ameaças e com o fato de ver seus antigos amigos seguirem em frente.'
}
function deadpool(){
    capa.src ='img/images 3.jpg'
    sinopse.textContent = 'Anos após se aposentar como o mercenário Deadpool, Wade Wilson (Ryan Reynolds) vive uma vida pacata como vendedor de carros usados. Sua calmaria acaba quando agentes da TVA (Autoridade de Variância Temporal) o sequestram, revelando que sua linha temporal corre o risco de ser totalmente apagada. Para salvar seu universo e as pessoas que ama, Wade precisa recrutar uma versão relutante, amargurada e deprimida de Wolverine (Hugh Jackman). Juntos, eles acabam banidos para o "Vazio", onde enfrentam a tirânica Cassandra Nova (Emma Corrin).'
}
function ghost(){
    capa.src ='img/images 4.jpg'
    sinopse.textContent = 'O filme do Motoqueiro Fantasma no Universo Cinematográfico da Marvel reconta a história de Johnny Blaze, um dublê que faz um pacto com o demônio Mefisto para salvar seu mentor. Amaldiçoado como o Espírito da Vingança, ele se rebela contra as forças das trevas para caçar entidades corrompidas e tentar salvar sua própria alma.'
}


const elHora         = document.getElementById('hora');
const elMinuto       = document.getElementById('minuto');
const elSegundo      = document.getElementById('segundo');
const elDia          = document.getElementById('dia');
const elMes          = document.getElementById('mes');
const elAno          = document.getElementById('ano');
const elDataCompleta = document.getElementById('data-completa');
const elSaudacao     = document.getElementById('saudacao');

function atualizarPainel() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();
    let dia = agora.getDate();
    let mes = agora.getMonth() + 1;
    let ano = agora.getFullYear();

    if (horas < 10) { horas = "0" + horas; }
    if (minutos < 10) { minutos = "0" + minutos; }
    if (segundos < 10) { segundos = "0" + segundos; }
    if (dia < 10) { dia = "0" + dia; }
    if (mes < 10) { mes = "0" + mes; }

    elHora.textContent = horas;
    elMinuto.textContent = minutos;
    elSegundo.textContent = segundos;
    elDia.textContent = dia;
    elMes.textContent = mes;
    elAno.textContent = ano;

    elDataCompleta.textContent = dia + "/" + mes + "/" + ano;

    let textoSaudacao = "";
    if (horas >= 5 && horas < 12) {
        textoSaudacao = "🌅 BOM DIA, CAÇADOR!";
    } else if (horas >= 12 && horas < 18) {
        textoSaudacao = "☀️ BOA TARDE, CAÇADOR!";
    } else {
        textoSaudacao = "🌙 BOA NOITE, CAÇADOR!";
    }

    elSaudacao.textContent = textoSaudacao;
}

setInterval(atualizarPainel, 1000);
atualizarPainel();

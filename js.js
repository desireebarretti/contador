let inicio = document.querySelector('#num-inicio')
let fim = document.querySelector('#num-fim')
let passo = document.querySelector('#passo')
let msg = document.querySelector('#msg')

function contar() {
    if (passo.value == '0' || inicio.value == '0' || fim.value == '0') {
        msg.style.color = 'red'
        msg.innerHTML = 'Dados não podem ter valor 0!'
    } else if (passo.value == '' || inicio.value == '' || fim.value == '') {
        msg.style.color = 'red'
        msg.innerHTML = 'Dados não podem estar vazios!'
    } else {
        for (let contador = Number(inicio.value); contador <= Number(fim.value); contador += Number(passo.value)) {
            msg.innerHTML += `${contador} \u{27A1}`
        }
        for (let contador = Number(inicio.value); contador >= Number(fim.value); contador -= Number(passo.value)) {
            msg.innerHTML += `${contador} \u{27A1} `
        }
        msg.innerHTML += `\u{1F3C1}`
    }
} 

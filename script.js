const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

let total
let finalDate
let intervalId

if(localStorage.getItem("timer")) {
    finalDate = localStorage.getItem("timer")
    intervalId = setInterval(timer, 1000)
}

function btnStart() {
    const date = document.querySelector('input').value
    finalDate = new Date(date).getTime()
    localStorage.setItem("timer", finalDate)
    /*localStorage SERVIU PARA GUARDAR NO SISTEMA A DATA FINAL PARA QUE, AO FECHAR A PÁGINA, O TIMER CONTINUE CONTANTO!*/

    intervalId = setInterval(timer, 1000)
}

function timer() {
    let now = new Date().getTime()
    total = finalDate - now

    const days = Math.floor(total / day)
    const hours = Math.floor((total % day) / hour) + 3
    const minutes = Math.floor((total % hour) / minute)
    const seconds = Math.floor((total % minute) / second)
    //O SÍMBOLO % SERVIU PARA PEGAR APENAS O RESTO DA DIVISÃO 

    document.querySelector('h1').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

function btnReset() {
    document.querySelector('h1').innerText = '⏲️'
    clearInterval(intervalId)
    localStorage.removeItem('timer')
}
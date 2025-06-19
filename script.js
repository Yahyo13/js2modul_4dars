let send = document.querySelector(`.btn1`)
let plus = document.querySelector(`.btn2`)
let minus = document.querySelector(`.btn3`)
let data = document.querySelector(`.inp1`)
let color = document.querySelector(`.inp2`)
let digit = document.querySelector(`h1`)



color.addEventListener(`input`, ()=>{
    digit.style.color = color.value
})

send.addEventListener(`click`, ()=>{
   digit.textContent = data.value
})

plus.addEventListener(`click`, ()=>{
    digit.textContent = data.value ++
})

minus.addEventListener(`click`, ()=>{
    digit.textContent = data.value --
})




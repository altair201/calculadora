const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
const operando=document.getElementById("operando")
const display=document.getElementById("display")
const botones=document.querySelector('.container_btns')

botones.addEventListener('click',(e)=>{
    if(e.target.id=='suma'){
        operando.textContent="+"
    }
    if(e.target.id=='rest'){
        operando.textContent="-"
    }
    if(e.target.id=='mul'){
        operando.textContent="x"
    }
    if(e.target.id=='div'){
        operando.textContent="/"
    }
    if(e.target.id=='igual'){
        if(operando.textContent=="+"){
            display.textContent=+num1.value + +num2.value
        }
        if(operando.textContent=="-"){
            display.textContent=+num1.value - +num2.value
        }
        if(operando.textContent=="x"){
            display.textContent=+num1.value * +num2.value
        }
        if(operando.textContent=="/"){
            display.textContent=+num1.value / +num2.value
        }
    }
})
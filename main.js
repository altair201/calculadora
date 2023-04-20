const num1=document.getElementById("num1")
const num2=document.getElementById("num2")
const operando=document.getElementById("operando")
const display=document.getElementById("display")
const botones=document.querySelector('.container_btns')

let save;
botones.addEventListener('click',(e)=>{
    
    if(e.target.id=='suma'){
        operando.textContent="+"
        save=+num1.value
        num1.value=''
    }
    if(e.target.id=='rest'){
        operando.textContent="-"
        save=+num1.value
        num1.value=''
    }
    if(e.target.id=='mul'){
        operando.textContent="x"
        save=+num1.value
        num1.value=''
    }
    if(e.target.id=='div'){
        operando.textContent="/"
        save=+num1.value
        num1.value=''
    }
    
    if(e.target.id=='igual'){
        if(operando.textContent=="+"){
            display.textContent=save + +num1.value
        }
        if(operando.textContent=="-"){
            display.textContent=save - +num1.value
        }
        if(operando.textContent=="x"){
            display.textContent=save * +num1.value
        }
        if(operando.textContent=="/"){
            display.textContent=save / +num1.value
        }
    }
    if(e.target.id=='limpiar'){
        display.textContent=''
        operando.textContent=""
        num1.value=""
    }
})
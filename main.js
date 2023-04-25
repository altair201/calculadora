
const operando=document.getElementById("operando")
const display=document.getElementById("display")
const botones=document.querySelector('.container_btns')

let save=[];
let parte1='';
let borrar;
let borrado;
let nenum;
let total;
botones.addEventListener('click',(e)=>{
    if(e.target.id=='0'){
        display.textContent+="0"
        parte1=parte1+'0'
    }
    if(e.target.id=='1'){
        display.textContent+="1"
        parte1=parte1+'1'
    }
    if(e.target.id=='2'){
        display.textContent+="2"
        parte1=parte1+'2'
    }
    if(e.target.id=='3'){
        display.textContent+="3"
        parte1=parte1+'3'
    }
    if(e.target.id=='4'){
        display.textContent+="4"
        parte1=parte1+'4'
    }
    if(e.target.id=='5'){
        display.textContent+="5"
        parte1=parte1+'5'
    }
    if(e.target.id=='6'){
        display.textContent+="6"
        parte1=parte1+'6'
    }
    if(e.target.id=='7'){
        display.textContent+="7"
        parte1=parte1+'7'
    }
    if(e.target.id=='8'){
        display.textContent+="8"
        parte1=parte1+'8'
    }
    if(e.target.id=='9'){
        display.textContent+="9"
        parte1=parte1+'9'
    }
    
    if(e.target.id=='suma'){
        display.textContent+="+"
        if(parte1==''){
            save.push('+');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('+');
        }
    }
    if(e.target.id=='rest'){
        display.textContent+="-"
        if(parte1==''){
            save.push('-');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('-');
        }
    }
    if(e.target.id=='mul'){
        display.textContent+="*"
        if(parte1==''){
            save.push('*');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('*');
        }
    }
    if(e.target.id=='div'){
        display.textContent+="/"
        if(parte1==''){
            save.push('/');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('/');
        }
    }
    if(e.target.id=='igual'){
        save.push(+parte1)
        for(let i=0; i<save.length; i++){
            if(save[i]=='+'){
                total=save[i-1]+save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
            else if(save[i]=='-'){
                total=save[i-1]-save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
            else if(save[i]=='*'){
                total=save[i-1]*save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
            else if(save[i]=='/'){
                total=save[i-1]/save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
        }
        display.textContent=total
        parte1='';
        save=[];
        save.push(total);
        borrar=0;
        borrado=0;
        nenum=0;
    }
    if(e.target.id=='limpiar'){
        display.textContent='';
        save=[];
        parte1='';
    }
})
window.addEventListener('keyup', (evento)=>{
    if(evento.key==0){
        display.textContent+=evento.key;
        parte1=parte1+'0'
    }
    if(evento.key==1){
        display.textContent+=evento.key;
        parte1=parte1+'1'
    }
    if(evento.key==2){
        display.textContent+=evento.key;
        parte1=parte1+'2'
    }
    if(evento.key==3){
        display.textContent+=evento.key;
        parte1=parte1+'3'
    }
    if(evento.key==4){
        display.textContent+=evento.key;
        parte1=parte1+'4'
    }
    if(evento.key==5){
        display.textContent+=evento.key;
        parte1=parte1+'5'
    }
    if(evento.key==6){
        display.textContent+=evento.key;
        parte1=parte1+'6'
    }
    if(evento.key==7){
        display.textContent+=evento.key;
        parte1=parte1+'7'
    }
    if(evento.key==8){
        display.textContent+=evento.key;
        parte1=parte1+'8'
    }
    if(evento.key==9){
        display.textContent+=evento.key;
        parte1=parte1+'9'
    }
    if(evento.key=='+'){
        display.textContent+="+"
        if(parte1==''){
            save.push('+');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('+');
        }
    }
    if(evento.key=='-'){
        display.textContent+="-"
        if(parte1==''){
            save.push('-');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('-');
        }
    }
    if(evento.key=='*'){
        display.textContent+="*"
        if(parte1==''){
            save.push('*');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('*');
        }
    }
    if(evento.key=='/'){
        display.textContent+="/"
        if(parte1==''){
            save.push('/');
        }else{
            save.push(+parte1);
            parte1=''
            save.push('/');
        }
    }
    if(evento.key=='Enter'){
        save.push(+parte1)
        for(let i=0; i<save.length; i++){
            if(save[i]=='+'){
                total=save[i-1]+save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
            else if(save[i]=='-'){
                total=save[i-1]-save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
            else if(save[i]=='*'){
                total=save[i-1]*save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
            else if(save[i]=='/'){
                total=save[i-1]/save[i+1];
                save.splice(i-1, 3, total)
                i=0;
            }
        }
        display.textContent=total
        parte1='';
        save=[];
        save.push(total);
        borrar=0;
        borrado=0;
        nenum=0;
    }
    if(evento.key=='Backspace'){
        if(parte1!=""){
            save.push(+parte1)
            parte1=""
            if(save[save.length-1]<10){
                save.pop()
                display.textContent=''
                save.forEach(element => {
                display.textContent+= element
            });
            }else{
                borrar=save[save.length-1];
                borrado = parseInt(borrar.toString().slice(0, -1));
                save[save.length - 1] = borrado; 
                display.textContent=''
                save.forEach(element => {
                display.textContent+= element
            });
        }
        }else if(save[save.length-1]<10){
            save.pop()
            display.textContent=''
            save.forEach(element => {
                display.textContent+= element
            });
        }else if(save[save.length-1]=="+" || save[save.length-1]=="-" || save[save.length-1]=="*" || save[save.length-1]=="/"){
            save.pop()
            display.textContent=''
            save.forEach(element => {
                display.textContent+= element
              });
        }
        else if(save[save.length-1]>9){
            borrar=save[save.length-1];
            borrado = parseInt(borrar.toString().slice(0, -1));
            save[save.length - 1] = borrado;
            display.textContent=''
            save.forEach(element => {
                display.textContent+= element
            });
        }
    }
    if(evento.key=='Escape'){
        display.textContent='';
        save=[];
        parte1='';
    }
   
})
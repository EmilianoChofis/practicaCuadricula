
content = document.getElementById('content');
button = document.getElementById('btn')
let idx = document.getElementById('idx').value
idy = document.getElementById('idy').value
time = document.getElementById('time').value
cant = document.getElementById('cant').value

const changeBtn = ()=>{
    if(button.value == "Start"){ button.innerText = "Pause"}
}

const pressBtn = ()=>{
    //changeBtn();
    if(idx)
        console.log(idx);
    else console.log('hola');
    
}


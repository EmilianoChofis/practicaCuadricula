
content = document.getElementById('content');
button = document.getElementById('btn')

const changeBtn = ()=>{
    if(button.value == "Start"){ button.innerText = "Pause"}
}

const pressBtn = ()=>{
    //changeBtn();
    let idx = document.getElementById('idx').value
    let idy = document.getElementById('idy').value
    let time = document.getElementById('time').value
    let cant = document.getElementById('cant').value

    createTable(idx, idy);
    
}

const createTable = (x,y)=>{
    const table = document.createElement("table")

    table.innerHTML = "<th>cosa</th>"
    document.body.appendChild(table)

    // for (let index = 0; index < x; index++) {
    //     for (let index = 0; index < y; index++) {
            

            
    //     }
        
    // }
}


//Menu
document.querySelector('[role="group"]').style.flexDirection = 'row'
document.querySelector('[role="group"]').style.alignItems = 'center'
document.querySelector('[role="group"]').style.minWidth = '656px'
document.querySelectorAll('[role="group"] button')
    .forEach(button=>{
        button.style.fontSize = ".8rem"
        button.style.marginRight ='5px'
        button.style.borderRadius ='5px'
})

//Header
document.querySelector("#containerHeader").style.textAlign = 'end'
document.querySelector("#containerHeader").style.backgroundColor = '#6c757d'
document.querySelector("#containerHeader").style.color = '#f5f5f5'
document.querySelector('[role="button"]').style.backgroundColor = '#34af15'
document.querySelector('[role="button"]').style.borderColor = '#34af15'
document.querySelector('[role="button"]').onmouseover = ()=> 
    document.querySelector('[role="button"]').style.opacity =.8
document.querySelector('[role="button"]').onmouseout = ()=> 
    document.querySelector('[role="button"]').style.opacity =1

//cards
document.querySelectorAll('.card a.btn').forEach(item => {
    item.onmouseover = ()=> {
        item.style.backgroundColor = '#34af15'
        item.style.borderColor = '#34af15'
    }
    item.onmouseout = ()=> {
        item.style.backgroundColor = '#007bff'
        item.style.borderColor = '#007bff'
    }
})



//listas

let li = document.createElement('li')
let li2 = document.createElement('li')

li.classList.add('list-group-item')
li2.classList.add('list-group-item')

let Quarto =  document.createTextNode("Quarto item")
let Quinto =  document.createTextNode("Quinto item")

li.appendChild(Quarto)
li2.appendChild(Quinto)

document.querySelector('.list-group').appendChild(li)
document.querySelector('.list-group').appendChild(li2)
document.querySelectorAll('.list-group-item').forEach((item,index)=>{
    item.style.cursor = 'pointer'
    item.onclick = function active(){
        document.querySelector('.active').classList.remove('active')
        item.classList.add('active')
    }
})
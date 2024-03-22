//Css import
import './css/header.css'
import './css/home.css'
import './css/main.css'
import './css/contact.css'

// Js Import 
import { callBlackLayer, callJoeScroll, anchorDelete, deleteAll  } from './js/home'


// Home section
callBlackLayer()
callJoeScroll()
anchorDelete()

const buttons = Array.from(document.querySelectorAll('#section2 > button'))
console.log(buttons)

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')){
            return
        }
        buttons.forEach(but=>{
            but.classList.value = ''
        })
       
        e.target.classList.add('active')

        deleteAll()
    })
})





import { addHome, deleteAllContent } from './home'
import { addMenu } from './menu'
import { addContact } from './contact'
const buttons = Array.from(document.querySelectorAll('#section2 > button'))

function navbarFunction(){
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            if(e.target.classList.contains('active')){
                return
            }
            buttons.forEach(but=>{
                but.classList.value = ''
            })
            
            e.target.classList.add('active')
            switch (button.id) {
                case 'about':
                    deleteAllContent()
                    setTimeout(addHome, 100)
                    break;
                case 'menu' :
                    deleteAllContent()
                    setTimeout(addMenu, 100)
                    break;
                case 'contact':
                    deleteAllContent()
                    setTimeout(addContact, 100)
                    break;        
                default:
                    console.log('Something is wrong')
                    break;
            }        
        })
    })
}

export { navbarFunction } 

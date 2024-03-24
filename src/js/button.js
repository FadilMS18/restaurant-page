import { addHome, deleteAllContent } from './home'
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
                    console.log(e.target.textContent)
                    deleteAllContent()
                    setTimeout(addHome, 100)
                    break;
                case 'menu' :
                    deleteAllContent()
                    console.log(e.target.textContent);
                    break;
                case 'contact':
                    deleteAllContent()
                    console.log(e.target.textContent);
                    break;        
                default:
                    console.log('Something is wrong')
                    break;
            }        
        })
    })
}

export { navbarFunction } 

const content = Array.from(document.querySelectorAll('.home-content'))

function callBlackLayer(){    
    content.forEach(div =>{
        div.addEventListener('mouseenter', ()=>{
            div.classList.add('hover')
            document.querySelector('#layer').classList.remove('gone')

            div.addEventListener('mouseleave', ()=> {
                div.classList.remove('hover')
                document.querySelector('#layer').classList.add('gone')
            })
        })
    })

}

const anchor = document.querySelector("#anchor")

function scroll(){
    window.scrollTo({
        top:document.querySelector('#content').offsetTop,
        behavior:'smooth',
    })
}
function callJoeScroll(){
    anchor.addEventListener('click', scroll)
}


export { callBlackLayer, callJoeScroll}
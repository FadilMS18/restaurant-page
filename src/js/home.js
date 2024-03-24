const farmer = require('./../images/pexels-jake-heinemann-1482101.jpg') //Img1
const JoeMama = require('./../images/stick_man_by_minimoko94-d2zvfn8_400x400.png') //Img2
const horses = require('./../images/pexels-pixabay-52500.jpg') //Img3



const main = document.querySelector('#home')
callBlackLayer()

const anchor = document.querySelector("#anchor")

// Dark Overlay over card content
function callBlackLayer(){    
    const content = Array.from(document.querySelectorAll('.home-content'))
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

// Scroll function smooth
function scroll(){
    window.scrollTo({
        top:document.querySelector('#home').offsetTop,
        behavior:'smooth',
    })
}
function callJoeScroll(){
    anchor.addEventListener('click', scroll)
}

// Delete Everything
function addHome(){
    addMainHome()
    setTimeout(()=>{
        document.querySelector('#home').classList.remove('zero')
    },50)
    callBlackLayer()
    
}

function deleteAllContent(){
    main.classList.add('zero')
    setTimeout(()=>{
        while(main.hasChildNodes()){
            main.removeChild(main.firstChild)
        }
    },100) 
}

// Add Image
function addImage1(){
    const img = document.createElement('img')
    img.setAttribute('alt', 'farmer-picture')
    img.setAttribute('title', 'src:Jake Heinemann on pexels.com' )
    img.src = farmer
    return img
}

function addImage2(){
    const img = document.createElement('img')

    img.setAttribute('alt', 'Joe mama Picture')
    img.setAttribute('title', 'src:@stick_man_says on twitter/X' )
    img.src = JoeMama
    return img
}

function addImage3(){
    const img = document.createElement('img')
    img.setAttribute('alt', 'farmer-picture')
    img.setAttribute('title', 'src:Pixabay on pexels.com' )
    img.src = horses
    return img
}

//Add image Title
function addImageTitle1(){
    const h3 = document.createElement('h3')
    h3.setAttribute('id', 'home-content-h1')
    return h3
}
function addImageTitle2(){
    const h3 = document.createElement('h3')
    h3.setAttribute('id', 'home-content-h2')
    return h3
}
function addImageTitle3(){
    const h3 = document.createElement('h3')
    h3.setAttribute('id', 'home-content-h3')
    return h3
}

//Add Image Description
function addImageDescription1(){
    const p = document.createElement('p')
    p.innerHTML = "This is it The Man, The Myth The Legend Himself, Uncle 'papa' Joe the third, with uncle Joe everything that you need to know is solved easy."
    return p
}
function addImageDescription2(){
    const p = document.createElement('p')
    p.innerHTML = "This is Joe Mama, legend said that she is a witch that born a long time ago, she capable to change her looks and body every single time, we are not capable to get her picture, so here a stickman."
    return p
}
function addImageDescription3(){
    const p = document.createElement('p')
    p.innerHTML = "This horses is not uncle Joe's horses, i don't know where they came from, but one thing for sure... This horses are cool !"
    return p
}

function addHomeContent1(){
    const homeContentContainer = document.createElement('div')
    homeContentContainer.classList.add('home-content')

    homeContentContainer.appendChild(addImage1())
    homeContentContainer.appendChild(addImageTitle1())
    homeContentContainer.appendChild(addImageDescription1())
    return homeContentContainer
}

function addHomeContent2(){
    const homeContentContainer = document.createElement('div')
    homeContentContainer.classList.add('home-content')

    
    homeContentContainer.appendChild(addImage2())
    homeContentContainer.appendChild(addImageTitle2())
    homeContentContainer.appendChild(addImageDescription2())
    return homeContentContainer
}

function addHomeContent3(){
    const homeContentContainer = document.createElement('div')
    homeContentContainer.classList.add('home-content')


    homeContentContainer.appendChild(addImage3())
    homeContentContainer.appendChild(addImageTitle3())
    homeContentContainer.appendChild(addImageDescription3())
    return homeContentContainer
}


function addContentContainer(){
    const container = document.createElement('div')
    container.setAttribute('id', 'content-container')
    container.appendChild(addHomeContent1())
    container.appendChild(addHomeContent2())
    container.appendChild(addHomeContent3())

    return container
}

function addMainHome(){
    const h1 = document.createElement('h1')
    h1.innerHTML = 'HOME'
    h1.setAttribute('id', 'title')

    const p = document.createElement('p')
    p.innerHTML = "Welcome to Uncle Joe's Farm, before diving and start your journey with uncle joe, you first need to know about the team here, lets go i will tell you everything that you need to know. But there are some rules you need to aware of, the more you know the less you speak, A wise man knows that he knows nothing, the more you learn, the more you realize how much you don't know."
    p.setAttribute('id', 'description')

    main.appendChild(h1) 
    main.appendChild(p)
    main.appendChild(addContentContainer())
    
    
    
}

export {callJoeScroll, addHome ,deleteAllContent}
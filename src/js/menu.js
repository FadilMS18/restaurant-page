// Menu.Js
const gif = require('./../images/giphy.gif')
const curry = require('./../images/curry-7249247_1280.jpg')
const oranges = require('./../images/edgar-castrejon-oranges.jpg')

function addBigContainer(){
    const bigContainer = document.createElement('article')
    bigContainer.setAttribute('id', 'article-container')

}

function addArticleContainer1(){
    const container = document.createElement('article')
    container.classList.add('article-content')
    container.appendChild(Article1.sect())
    container.appendChild(Article1.image())
    return container
}
function addArticleContainer2(){
    const container = document.createElement('article')
    container.classList.add('article-content')
    container.appendChild(Article2.sect())
    container.appendChild(Article2.image())
    return container
}
function addArticleContainer3(){
    const container = document.createElement('article')
    container.classList.add('article-content')
    container.appendChild(Article3.sect())
    container.appendChild(Article3.image())
    return container
}

class Article1{
    static image(){
        const img = document.createElement('img')
        img.src = gif
        return img
    }

    static #title(){
        const title = document.createElement('h4')
        title.textContent = 'MilkyTech Creations'
        return title
    }

    static #desc(){
        const description = document.createElement('p')
        description.textContent = 'MilkyTech Creations is a collection of modern milk-themed dishes that blend technological innovation with delicious flavors.'
        return description
    }

    static sect(one, two){
        const section = document.createElement('section')
        section.classList.add('menu-caption')
        section.appendChild(Article1.#title())
        section.appendChild(Article1.#desc())
        return section
    }
}

class Article2{
    static image(){
        const img = document.createElement('img')
        img.src = curry
        return img
    }

    static #title(){
        const title = document.createElement('h4')
        title.textContent = 'Spice Fusion Delight'
        return title
    }

    static #desc(){
        const description = document.createElement('p')
        description.textContent = 'Curry with tofu & chicken for the main ingredients.'
        return description
    }

    static sect(){
        const section = document.createElement('section')
        section.classList.add('menu-caption')
        section.appendChild(Article2.#title())
        section.appendChild(Article2.#desc())
        return section
    }
}

class Article3{
    static image(){
        const img = document.createElement('img')
        img.src = oranges
        return img
    }

    static #title(){
        const title = document.createElement('h4')
        title.textContent = 'Tangy Orange Bites'
        return title
    }

    static #desc(){
        const description = document.createElement('p')
        description.textContent = 'Tangy Orange Bites offer a delightful blend of sweet and tangy flavors, providing a refreshing burst with every bite.'
        return description
    }

    static sect(){
        const section = document.createElement('section')
        section.classList.add('menu-caption')
        section.appendChild(Article3.#title())
        section.appendChild(Article3.#desc())
        return section
    }
}

function addMainMenu(){
    const h1 = document.createElement('h1')
    h1.textContent = 'MENU'

    main.appendChild(h1)
    main.appendChild(addArticleContainer1())
    main.appendChild(addArticleContainer2())
    main.appendChild(addArticleContainer3())
}

function menuBlackLayer(){
    const articleContainers = Array.from(document.querySelectorAll('.article-content'))
    articleContainers.forEach(article =>{
        article.addEventListener('mouseenter', ()=>{
            article.classList.add('hover')
            document.querySelector('#layer').classList.remove('gone')

            article.addEventListener('mouseleave', ()=> {
                article.classList.remove('hover')
                document.querySelector('#layer').classList.add('gone')
            })
        })
    })

}

function addMenu(){
    addMainMenu()
    setTimeout(()=>{
        document.querySelector('#main').classList.remove('zero')  
    },100)
    menuBlackLayer()
}

export { addMenu }
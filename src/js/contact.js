
class Contact{
    static form(){
        const form = document.createElement('div')
        form.setAttribute('id', 'form')
        form.appendChild(Contact.#formHeading())
        form.appendChild(Contact.#email())
        form.appendChild(Contact.#number())
        form.appendChild(Contact.#textArea())
        form.appendChild(Contact.#button())

        return form
    }
    static #formHeading(){
        const h5 = document.createElement('h5')
        h5.textContent = 'Get In Touch'
        return h5
    }
    static #email(){
        const email = document.createElement('input')
        email.classList.add('input')
        email.setAttribute('type', 'email')
        email.setAttribute('placeholder', 'E-Mail')
        return email
    }
    static #number(){
        const number = document.createElement('input')
        number.classList.add('input')
        number.setAttribute('type', 'number')
        number.setAttribute('placeholder', 'Number')
        return number
    }
    static #textArea(){
        const text = document.createElement('textarea')
        text.classList.add('input')
        text.setAttribute('placeholder', 'Tell Joe Something Here')
        text.cols = 30
        text.rows = 10
        return text
    }
    static #button(){
        const confirm = document.createElement('button')
        confirm.setAttribute('id', 'confirm')
        confirm.textContent = 'Confirm'
        return confirm
    }

    static title(){
        const title = document.createElement('h2')
        title.textContent = 'Joe is always here'
        const span = document.createElement('span')
        span.textContent = 'With Joe Mama'
        title.appendChild(span)
        return title
    }

}

function addMainContact(){
    const contactContainer = document.createElement('div')
    contactContainer.setAttribute('id', 'contact-container')

    contactContainer.appendChild(Contact.form())
    contactContainer.appendChild(Contact.title())
    main.appendChild(contactContainer)
}

function addContact(){
    addMainContact()
    setTimeout(()=>{
        document.querySelector('#main').classList.remove('zero')
    })
    confirmMsg()
}

function confirmMsg(){
    const inputs = Array.from(document.querySelectorAll('.input'))
    const button = document.querySelector('#confirm')
    button.addEventListener('click', ()=>{
        alert('Message send is success')
        for(let i = 0; i < inputs.length; i++){
            inputs[i].value = ''
        }
    })
}


export { addContact }
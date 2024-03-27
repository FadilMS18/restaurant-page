//Css import
import './css/header.css'
import './css/home.css'
import './css/menu.css'
import './css/contact.css'

// Js Import 
import {callJoeScroll, navbarFunction, addHome } from './js/exportFrom'

// Home section
callJoeScroll()
navbarFunction()

document.addEventListener('DOMContentLoaded', addHome)


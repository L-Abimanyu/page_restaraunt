import * as module from './loader.js'
module.buffer();

import{list} from './menu.js'

import{addr} from './contact.js'




import './style.css'

let changermodule = (function() {

    const home = document.querySelector(".home");
    home.addEventListener("click", module.buffer);

    
    const menu = document.querySelector(".menu");
    menu.addEventListener("click", list);

    const contact = document.querySelector(".contact");
    contact.addEventListener("click", addr);

   

})();
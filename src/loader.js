import restar from './assets/back1.jpg';

export function buffer(){
     let content=document.querySelector('#content');
     content.replaceChildren();

    
     const resta=document.createElement('img');
     resta.classList.add('image');
     resta.src= restar;
     resta.alt="image of restarant";
     content.append(resta);

     

}
 
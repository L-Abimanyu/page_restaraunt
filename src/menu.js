import foods from './assets/menus.jpg';

export function list(){

  
    
     const content=document.querySelector("#content");
     
    

     content.replaceChildren();

    
    

      const menu=document.createElement("img");
      menu.classList.add('image');
      menu.src= foods;
      menu.alt="Item-image";
      content.appendChild(menu);
 
}


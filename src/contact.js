export function addr() {
    const content = document.querySelector("#content");
  
    content.replaceChildren();
  
    const add = document.createElement("h2");
    add.textContent = "Address";
    add.classList.add("cont");
    content.appendChild(add);
  
    const add1 = document.createElement("p");
    add1.textContent = "83-90 vinayakar kovil street,";
    add1.classList.add("address");
    content.appendChild(add1);
  
    const add2 = document.createElement("p");
    add2.textContent = "p.c.patti,";
    add2.classList.add("address");
    content.appendChild(add2);
  
    const add3 = document.createElement("p");
    add3.textContent = "theni.";
    add3.classList.add("address");
    content.appendChild(add3);
  
    const add4 = document.createElement("p");
    add4.textContent = "ph-no:8270813910";
    add4.classList.add("address");
    content.appendChild(add4);
  }


  
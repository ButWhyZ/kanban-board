function addItem() {
    const item = prompt("New item:");          
    if (item) {                                
        const li = document.createElement("li"); 
        li.textContent = item;                 
        document.getElementById("list").appendChild(li);
    }
}

function removeItem() {
    const list = document.getElementById("list");   
    const last = list.lastElementChild;             
    if (last) list.removeChild(last);  
}
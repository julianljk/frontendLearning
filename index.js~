function generateTable() {
    let body = document.body; 
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");  
    let thead = document.createElement("thead");
    let headTr = document.createElement("tr"); 
    for(let i = 0; i < 3; i++) { 
        let th = document.createElement("th"); 
        let headerContent = document.createTextNode("header " + i); 
        th.appendChild(headerContent);
        headTr.appendChild(th); 
    }
    thead.appendChild(headTr); 
    table.appendChild(thead);
    thead.setAttribute("align", "center");  
    for(let i = 0; i < 5; i++) {    
        let tr = document.createElement("tr"); 
        for(let j = 0; j < 3; j++) {    
            let td = document.createElement("td"); 
            let textContent = document.createTextNode("index (" + i + ", " + j +")"); 
            td.appendChild(textContent); 
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    body.appendChild(table);
    table.setAttribute("border", "2"); 
}

window.onload = function() {
    var button = document.querySelector("body > button"); 
    button.addEventListener("click", generateTable);
}

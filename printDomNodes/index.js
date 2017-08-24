Array.prototype.groupBy = function(f) {
    return this.reduce((acc, val) => {
        let by = typeof f == "function" ? '' + f(val) : val[f];
        (acc[by] = acc[by] || []).push(val); 
        return acc;         
    }, {});
}

function printDom() {   
    var html = document.querySelector("html"); 
    var list = [];
    var div = document.getElementById("nodeList"); 
    var callback = function(obj) {
        if(obj.element.tagName) {
            list.push(obj); 
        }
    }
    traverseDOM(html, callback, 0);
    let groupedObj = list.groupBy(x => x.level);
    Object.keys(groupedObj).forEach((key) => {
        groupedObj[key].forEach((obj) =>{
            let p = document.createElement("p"); 
            let e = obj.element; 
            let textNode = document.createTextNode(`Level ${obj.level}: ${e.tagName.charAt(0) + e.tagName.slice(1).toLowerCase()}`);
            p.appendChild(textNode); 
            div.appendChild(p); 
        });
    });  
    
}
function traverseDOM(parent, callback, level) {
    if(parent.hasChildNodes()) {
        for(var curr = parent.firstChild; curr; curr = curr.nextSibling) {
            traverseDOM(curr, callback, level + 1); 
        }        
    }
    callback({
        element: parent,
        level: level
    }); 
}

window.onload = function() {
    var button = document.querySelector("body > button");
    var html = document.querySelector("html");  
    button.addEventListener("click", printDom);
}

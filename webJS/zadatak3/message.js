var send = document.querySelector(".send");

send.onclick = function () {
    
    var div = document.querySelector("div");
    var input = document.querySelector(".field");
    var p = document.createElement('p');

    p.textContent = input.value;
    div.appendChild(p);
    input.value = '';
    

    
}
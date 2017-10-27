function background() {
    // var button = document.getElementById('button');
    document.body.classList.toggle('myStyle');
}

var id = 0;

function blink() {
    if (!id) {
        id = setInterval(background,500);
        document.getElementById('button2').value = 'Off';
    }
    else {
        clearInterval(id);
        id = 0;
        document.getElementById('button2').value = 'Blink';
    }
  
   
}

// function off() {
    
//     clearInterval(id);
// }

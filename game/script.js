/*function myGame() {
    var elem = document.getElementById("player");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 750) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
        
      }
    }
  }*/
 


 

  document.body.onclick =  function(event) {
    var elem = document.getElementById("player");

    elem.style.top = event.clientY + 'px'; 
    elem.style.left = event.clientX + 'px';
  }



  $(document).ready(function(){
      var p = $("<p></p>").text("Hello world!");
});
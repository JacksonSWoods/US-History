//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var t;
     var posleft = 0; 
     var posup =0;
    //our box element
    var box = document.getElementById('box');
    var container = document.getElementById('container');
     document.onkeypress = function(event){
    let key = event.key.toUpperCase();
   if ( key == 'W' ) {
        moveUp();
    } else if ( key == 'D' ) {
        // 'D' key is pressed
      moveRight();
    }else if(key == 'A'){
        moveLeft();
    }else if(key == 'S'){
        moveDown();
    }
};

    function moveRight() {
        if(posleft < container.offsetWidth - 50) {
           
                      posleft += 50;
            box.style.left = posleft+'px';
        }
    }
         function moveLeft() {
        if(posleft > 0) {
          
                      posleft -= 50;
            box.style.left = posleft+'px';
        }
    }
      function moveDown() {
        if(posup < container.offsetHeight-50) {
          
                      posup += 50;
            box.style.top = posup+'px';
        }
    }
     function moveUp() {
        if(posup > 0) {
                      posup -= 50;
            box.style.top = posup+'px';
        }
    }
};

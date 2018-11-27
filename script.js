//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var t;
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var container = document.getElementById('container');
     document.onkeypress = function(event){
    let key = event.key.toUpperCase();
    if ( key == 'ARROWUP' ) {
        alert();
    } else if ( key == 'D' ) {
        // 'D' key is pressed
    }
}
          t = setInterval(moveLeft, 10);

    function moveLeft() {
        if(pos >= container.offsetWidth + 50) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};

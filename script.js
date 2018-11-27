//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
     var pos = 0; 
    //our box element
    var box = document.getElementById('box');
    var container = document.getElementById('container');
    var t = setInterval(move, 10);
  
    function move() {
        if(pos >= container.offsetWidth - 50) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
	var posleft = 0; 
	var posup =0;
	var box = document.getElementById('box');
	var container = document.getElementById('container');
	document.onkeypress = function(event){
		let key = event.key;
		if ( key == 'w' ) {
			moveUp();
		}else if ( key == 'd' ) {
			moveRight();
		}else if(key == 'a'){
			moveLeft();
		}else if(key == 's'){
			moveDown();
		}else if(event.keyCode == 32){
			interact();
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
		if(posup <= 400) {
			posup += 50;
			box.style.top = posup+'px';
		}
	}
	function moveUp() {
		if(posup >= 10) {
			posup -= 50;
			box.style.top = posup+'px';
		}
	}
	function interact(){
		var Scene = 1;
		switch(posleft){
			case 50:
				alert("case 50");
			break;
			case 200:
				alert("case 200");
			break;
			case 550:
				alert("case 550");
			break;
		}
	}
};

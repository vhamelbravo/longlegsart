const DrawingBig = document.getElementById('drawing-big');
const ArrowLeft = document.getElementById('left');
const ArrowRight = document.getElementById('right');
let intervald

ArrowRight.addEventListener('mousedown', () => {
	  intervalId = setInterval(() => {
		  DrawingBig.scrollLeft += 5;},
		  10);
});

ArrowLeft.addEventListener('mousedown', () => {
	intervalId = setInterval(() => {
	                  DrawingBig.scrollLeft -= 5;},
	                  10);
});
document.addEventListener('mouseup', () => {
	clearInterval(intervalId);
});

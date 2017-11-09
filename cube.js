import 'jquery';
import 'cube.scss';

$(function() {

	var stop = false;
	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";

	$('body').bind(mousewheelevt, function(e){

		if (stop) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}

		var evt = window.event || e;
		var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;
		evt = evt.originalEvent ? evt.originalEvent : evt;

		stop = true;

		setTimeout(function(){
			stop = false;
		}, 1000); 

		(function(){

			var _cube = $(".cubeTransition");
			var _currentDeg = $(".cubeTransition").attr("data-rotate");

			if(delta > 0) {
				var _nextDeg = parseInt(_currentDeg) - 90;
				_cube.css({'transform' : 'translateZ(-50vh)' + 'rotateX(' + _nextDeg + 'deg)'});
				_cube.attr("data-rotate", _nextDeg);            
			}

			else {
				var _nextDeg = parseInt(_currentDeg) + 90;
				_cube.css({'transform' : 'translateZ(-50vh)' + 'rotateX(' + _nextDeg + 'deg)'});
				_cube.attr("data-rotate", _nextDeg);
			}
			
		})();
	});

});

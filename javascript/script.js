
function openVideo() {
    document.getElementById("trailer").innerHTML = "<video style='position:absolute;height:620px;top:215px;left:400px' controls> <source src='video/cuphead.mp4 type='video/mp4'> <source src='video/cuphead.mp4' type=''video/ogg'>Your browser does not support the video tag.</video>"
}


$(document).ready(function(){
	// Funcion de estilo de footer
	if($("body").height() < $(window).height()){
		$("footer").css({
			"position":"absolute",
			"bottom":"0px"
		});
	}
});

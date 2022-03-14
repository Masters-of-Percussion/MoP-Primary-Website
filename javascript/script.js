$(document).ready(function(){
	// Funcion de estilo de footer
	if($("body").height() < $(window).height()){
		$("footer").css({
			"position":"absolute",
			"bottom":"0px"
		});
	}
});
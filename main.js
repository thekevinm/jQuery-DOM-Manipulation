$(document).ready(function(){
	$(".top").on("click", function(){
		$(".topic").removeClass("show");
		$(this).find("+.topic").addClass("show");
	})
})
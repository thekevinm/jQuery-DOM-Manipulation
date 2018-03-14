$(document).ready(function(){
	$(".top").on("click", function(){
		$(".topic").removeClass("show");
		$(this).siblings(".topic").addClass("show");
	})
})
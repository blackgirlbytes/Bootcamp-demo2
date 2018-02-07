$(document).ready(function(){

	$(".women").on("click",function(){

		if ($(this).hasClass("rose")){
			$("#nikki").toggleClass("hidden");
		}else {
			alert("Wrong!");
		}



	});

});

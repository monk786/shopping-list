$(document).ready(function(){
	$("#enterItem").keypress(function(e){
		if (e.which == 13){
			var x=$("#enterItem").val();
			if(x.length>0){
				$("#entry").append("<li class = item1>"+x+"</li>");
				$("#enterItem").val("");
			}
		}
	});

	$("#iconimg").click(function(){
		$("#content").show();
		$(".instruction").show();
		$(".inst2").show();
	});

	$(document).on("click",".item1",function(){
			console.log("wrkng");
			console.log($(this)[0]);
			$(this).wrap("<strike>");
	});
	
	$("#redo").click(function(){    	
    		$("#entry").empty();
    		$("#enterItem").val("");  	
			
    	});

});
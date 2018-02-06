$(function(){
	//Objects
	var send_button = $(".vote");
	var title, option_a, option_b, description;



	//Handlers
	send_button.click(function(){

		title       = $(".vote-title");
		option_a    = $("[name='value-1']");
		option_b    = $("[name='value-2']");
		description = $(".description");

		if(check() == true){
			send(title);
		}else{
			
		}
	});


	//Functions
	function check(){ //Check values function
		if(title.val() == '' || option_a.val() == ''  || option_b.val() == ''){
			return false;
		}else{
			return true;
		}
	}

	function send(title, o_a, o_b, description){
		if(description == ''){
			description = "0";
		}else{
			description = $(".description").val();
		}
		$.ajax({
			type: 'POST',
			url: "core/create.php",
			data: {title: title.val(), op_a: option_a.val() , op_b: option_b.val() , description: description},
			dataType: "html",
			success:function(data){
				if(data == "true"){
					title.val('');
					option_a.val('');
					option_b.val('');
					$(".description").val('');
				}else{
					alert("Desgraciadamente algo salió mal : (");
				}
			}			
		});

	}
});
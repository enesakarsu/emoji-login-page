		/*** Author: Enes Akarsu ***/
		/*** Github: https://github.com/enesakarsu ***/
		
		var process = 0;
		var typingctrl;
		var typingCounter = 0;
		const username = $("input[type=text]").val().length;
		const password = $("input[type=password]").val().length;

		function typingControl() {
			var user = $("input[type=text]").val().length;
			var pass = $("input[type=password]").val().length;
			if ((user || pass) > 0 && typingCounter == 0) {
				$("#emoji").attr("src", "assets/img/hmm.gif");
				typeEffect("Biraz sıkıcı olacak ama tamam bekliyorum...");
				typingCounter++;
				clearInterval(typingctrl);
			}else{
				if(user+pass > username+password){
					typeEffect("Biraz sıkıcı olacak ama tamam bekliyorum...");
					typingCounter = 0;
					clearInterval(typingctrl);
				}
			}
			
       	}
        
        function loginSuccess(){
        	$("#emoji").attr("src", "assets/img/smiley.gif");
	        typeEffect("Yaşasın! Bilgiler doğru. İşte gidiyoruz...");
        }
        
        function loginError(){
        	$("#emoji").attr("src", "assets/img/sad.gif");
	        typeEffect("Bu bilgiler yanlış. Yoksa unuttun mu?");
        }
        
        function loginEmpty(){
        	$("#emoji").attr("src", "assets/img/angry.gif");
	        typeEffect("Hiçbir şey girmeden nasıl oturum açabiliriz söyler misin?");
        }
        
        function clearTypeEffect(){
        $("#emoji-msg").html("");
        clearTimeout(typeRun);
        }
        
       function typeEffect(text){
		function type(){
			if (i < text.length) {
				 document.getElementById("emoji-msg").innerHTML += text.charAt(i);
				 i++;
				 var typeRun = setTimeout(type, speed);
			 }else if(i == text.length){
				 process = 0;
				 $("#loginBtn").removeAttr("disabled");
			 }
		 
		}
		   
		   
		process++;
		if (process <= 1) {
			$("#emoji-msg").html("");
			$("#loginBtn").attr("disabled", "true");
	       var i = 0;
		   var speed = 40;
			type();
		}
		
	}
        function typingListener(){
         typingctrl = setInterval(typingControl, 200);
		}

		typingListener();
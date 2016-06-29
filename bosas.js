API.on(API.CHAT, bobas);

function bobas(data){

	if(data.message.indexOf("!bosas") > -1)
	{
		if(data.un == "Likuxas")
                {
			API.sendChat("@"+data.un+" Jo ! :D");
		} 
                else 
                {
			API.sendChat("@"+data.un+" Ne :D ");
		}
        }
}


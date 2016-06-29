API.on(API.CHAT, bobas);

function bobas(data){

	if(data.message.indexOf("!bosas") > -1){

		if(msgData.un == "Likuxas")
    {
			API.sendChat("@"+msgData.un+" Jo ! :D");
		} 
    else 
    {
			API.sendChat("@"+msgData.un+" Ne :D ");
		}
}

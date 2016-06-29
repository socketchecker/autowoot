API.on(API.CHAT, bobas);

function bobas(data){

	if(data.message.indexOf("!bosas") > -1)
	{
		if(API.ROLE == 5)
                {
			API.sendChat("@"+data.un+" Jo , bosas su hosto staffu :)");
		} 
                else if(API.ROLE == 4)
                {
			API.sendChat("@"+data.un+" Jo , bosas su co-host staffu :)");
		}
		else if(API.ROLE == 3)
                {
			API.sendChat("@"+data.un+" Jo , bosas su manager staffu :)");
		}
		else if(API.ROLE == 2)
                {
			API.sendChat("@"+data.un+" Jo , bosas su bouncer staffu :)");
		}
		else if(API.ROLE == 1)
		{
			API.sendChat("@"+data.un+" Jo, bosas bet dar tik prdedantysis su rdj :)")
		}
		else if(API.ROLE == 0)
		{
			API.sendChat("@"+data.un+" Deja, staffo neturi, bet esi pats sau bosas :D")
		}
        }
}


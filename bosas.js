API.on(API.CHAT, bobas);

function bobas(data){
	
	var role = API.getUser(data.cid).permission;

	if(data.message.indexOf("!bosas") > -1)
	{
		if(role == API.ROLE.HOST)
                {
			API.sendChat("@"+data.un+" Jo , bosas su hosto staffu :)");
		} 
                else if(role == API.ROLE.COHOST)
                {
			API.sendChat("@"+data.un+" Jo , bosas su co-host staffu :)");
		}
		else if(role == API.ROLE.MANAGER)
                {
			API.sendChat("@"+data.un+" Jo , bosas su manager staffu :)");
		}
		else if(role == API.ROLE.BOUNCER)
                {
			API.sendChat("@"+data.un+" Jo , bosas su bouncer staffu :)");
		}
		else if(role == API.ROLE.DJ)
		{
			API.sendChat("@"+data.un+" Jo, bosas bet dar tik prdedantysis su rdj :)")
		}
		else if(role == API.ROLE.NONE)
		{
			API.sendChat("@"+data.un+" Deja, staffo neturi, bet esi pats sau bosas :D")
		}
        }
}


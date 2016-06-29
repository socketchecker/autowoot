API.on(API.CHAT, botas);

function botas(data){

	if(data.message.indexOf("!bosas") > -1)
	{
		var role = API.getUser(data.cid).permission
		
		if(role == 5)
                {
			API.sendChat("@"+data.un+" Jo , bosas su hosto staffu :)");
		} 
                else if(role == 4)
                {
			API.sendChat("@"+data.un+" Jo , bosas su co-host staffu :)");
		}
		else if(role == 3)
                {
			API.sendChat("@"+data.un+" Jo , bosas su manager staffu :)");
		}
		else if(role == 2)
                {
			API.sendChat("@"+data.un+" Jo , bosas su bouncer staffu :)");
		}
		else if(role == 1)
		{
			API.sendChat("@"+data.un+" Jo, bosas bet dar tik prdedantysis su rdj :)")
		}
		else if(role == 0)
		{
			API.sendChat("@"+data.un+" Deja, staffo neturi, bet esi pats sau bosas :D")
		}
		else
		{
			API.sendChat("Error ! Plug.dj klaida..")
		}
        }
}


API.on(API.CHAT, newfun);

function newfun(data){

	if(data.message.indexOf("!test") > -1){

        API.moderateAddDJ(data.cid);
        
        }
}

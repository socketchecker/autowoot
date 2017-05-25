API.on(API.ADVANCE, callback);

function callback () {

	var a = API.getMedia().cid;
	setTimeout(function() {
	    var b = API.getMedia().cid;
	    if (a === b) {
	        API.sendChat("/me :warning: Daina uzstrigo. :white_check_mark: Skipinama!");
	        API.moderateForceSkip();
	    }
	}, (API.getMedia().duration * 1000) + 2000);

}

/* Mini botas
v1.0
kurejas : Likuxas
*/

var role = API.getUser(data.fromID).permission;
botrole = API.getUser().permission;

API.on(API.CHAT, chat);

function chat(data) {

 if(data.message.indexOf("!help") > -1)
 {
  API.sendChat(":warning: !clearchat , !fb , !rules, !taisykles, !lock, !unlock, !skip :warning:");
 }
 if(data.message.indexOf("!fb") > -1)
 {
  API.sendChat("[BOTAS] @" + data.un + " Musu facebook puslapis : https://www.facebook.com/Muzika-Tavo-Ausims-511662315627478/ :)");
 }
  if(data.message.indexOf("!rules") > -1)
 {
  API.sendChat("[BOTAS] @" + data.un + " Kambario taisykles : https://www.facebook.com/511662315627478/photos/pb.511662315627478.-2207520000.1456752686./673169786143396/?type=3&theater :)");
 }
  if(data.message.indexOf("!taisykles") > -1)
 {
  API.sendChat(":warning: [BOTAS] @" + data.un + " Kambario taisykles : https://www.facebook.com/511662315627478/photos/pb.511662315627478.-2207520000.1456752686./673169786143396/?type=3&theater :)");
 }
  if(data.message.indexOf("!lock") > -1)
 {
  API.sendChat(:warning: "@" + data.un + " WaitList uzrakintas !");
  API.moderateLockWaitList(true);
 }
  if(data.message.indexOf("!unlock") > -1)
 {
  API.moderateDeleteChat(data.cid);
  API.sendChat(:warning: "@" + data.un + "] Waitlist atrakintas!");
  API.moderateLockWaitList(false);
 }
  if(data.message.indexOf("!skip") > -1)
 {
  API.sendChat(":warning: [BOTAS] Daina praleista !");
  API.moderateForceSkip(true);
 }
}

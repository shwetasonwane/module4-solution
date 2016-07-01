(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var name in names) {
var temp = names[name].charAt(0);
if (temp == 'j' || temp == 'J') {
	window.byeSpeaker.speak(names[name]);
  } else {
    window.helloSpeaker.speak(names[name]);
  }
}
 
})();

var _ = require('underscore');

calc = function(people){
	var givers = people;
	var receivers = people.slice();
	var sets = [];
	var chose = function(){
		i = receivers.length;
		var rand = Math.floor((Math.random()*i));
		var person = receivers[rand];
		receivers.splice(rand,1);
		return person;
	}
	while(givers.length > 0){
		var g = givers[0];
		console.log('giver: ',g);
		var r = chose(_.without(g));
		givers.splice(0,1);
		console.log('remaining givers ',givers);
		sets.push({"giver":g,"receiver":r});
	}
	return sets;
}

module.exports = calc;




#!/bin/env node

var _ = require('underscore');
var fs = require('fs');
var lineByLine = require('line-by-line'); // figure this should detect both CR and CRLF endings


var genSet = function(people){
	if(_.uniq(people).length !== people.length) throw new Error('duplicate error');
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
		var r = chose(_.without(g));
		givers.splice(0,1);
		sets.push({"giver":g,"receiver":r});
	}
	return sets;
};

if(!module.parent){
	var lr = new lineByLine('names.txt');
	var names = [];
	lr.on('error',function(err){console.log(err);})
	lr.on('line',function(line){names.push(line);});
	lr.on('end',function(){
		var set = genSet(names);
		printToFiles(set);
	});
	var printToFiles = function(set){
		if(!fs.existsSync("output")){
			console.log('making dir');
			fs.mkdirSync("output",0766,function(err){
				console.log(err);
			})
		}
		set.forEach(function(el,i){
			fs.writeFile("output/"+el.giver,el.receiver,function(err){
				if(err){ 
					console.log("can't write to files, permissions?");
					throw new Error(err);
				}
			})
		});
		console.log('done!');
	}
}

module.exports = genSet;


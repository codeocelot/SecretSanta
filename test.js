var assert = require('assert');
var ss = require('./main');
var _ = require('underscore');

describe('gift selector',function(){
	describe('the empty set',function(){
		it('should cover the empty set case ([])',function(){
			var set = ss([]);
			assert.equal(set.length,0);
		}
			)
	})
	describe('a non empty set',function(){
		it('should produce a set of givers an recievers so that everyone gives and gets exactly one gift',function(){
			var set = ss(["Joey","Mike","Rory","Alex","Siebren","John","Siobhan"]);
			set.forEach(function(el,i){
				assert.equal( _.where(set,{'giver':el.giver} ).length,1 )
				assert.equal(_.where(set,{'receiver':el.receiver}).length,1)
			})
		})
	});
	describe('duplicate names',function(){
		it('should throw an error',function(){
			var names = ['joey','john','joey'];
			assert.throws(function(){ss(names)},Error);
		})
	})
})

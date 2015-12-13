var assert = require('chai').assert;
var Actor = require('../actor.js')


describe('A Defense', function(){
	before(function(){
		actor = new Actor('igm-data/Database/dnd5basic/actors/guard')
		defense = actor.defenses[0]
	})

	describe('should have a To Hit method', function(){
		before(function(){
			toAvoid = defense.toAvoidHit({})
			// console.log(toAvoid)
		})
		it('that will return toHit attack roll', function(){
			assert.isAbove(toAvoid.avoidBonus,0)
		})
	})


})
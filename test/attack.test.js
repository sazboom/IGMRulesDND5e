var assert = require('chai').assert;
var Actor = require('../actor.js')

describe('An Attack', function(){
	before(function(){
		actor = new Actor('igm-data/Database/dnd5basic/actors/guard')
		attack = actor.attacks[0]
		defense = actor.defenses[0]
	})

	describe('should have a To Hit method', function(){
		before(function(){
			toHit = attack.toHit({})
		})
		it('that will return toHit attack roll', function(){
			assert.isAbove(toHit.attackRoll,0)
		})
		it('that will return a hit bonus', function(){
			assert.isAbove(toHit.hitBonus,0)
		})
		it('that will return a hit total', function(){
			assert.equal((toHit.attackRoll + toHit.hitBonus),toHit.hitTotal)
		})
		
	})

	describe('should have an Is Hit method', function(){
		it('that returns true or false', function(){
			assert.isBoolean(attack.isHit(defense))			
		})
	})

	describe('should have an On Hit method', function(){
		before(function(){
			onHit = attack.onHit({})
		})

		it('that will return onHit value', function(){
			assert.isObject(onHit)
		})
		it('that has a damage total', function(){
			assert.isAbove(onHit.damageTotal,0)
		})
		
	})

})
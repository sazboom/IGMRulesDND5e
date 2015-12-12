var assert = require('chai').assert;
var Actor = require('../actor.js')
var Attack = require('../attack.js')
var Defense = require('../defense.js')
var effect = {

}

describe('An Attack', function(){
	before(function(){
		attack = new Attack('igm-data/Database/dnd5basic/attacks/shortSword')
		actor = new Actor('igm-data/Database/dnd5basic/actors/guard')
		attack.owner = actor
	})

	describe('should have a To Hit method', function(){
		it('that will return toHit attack roll', function(){
			var toHit = attack.toHit({})
			console.log(toHit)
			assert.isAbove(toHit.attackRoll,0)
		})
		
	})

	describe('should have a On Hit method', function(){
		it('that will return onHit value', function(){
			var onHit = attack.onHit({})
			console.log(onHit)
			assert.isObject(onHit)
		})
		
	})

})
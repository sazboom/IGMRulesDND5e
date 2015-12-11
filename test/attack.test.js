var assert = require('chai').assert;
var Actor = require('../actor.js')
var Attack = require('../attack.js')
var Defense = require('../defense.js')
var effect = {

}

describe('An Attack', function(){
	before(function(){
		attack = new Attack(
			{
				shortName: 'sword',
				longName: 'A sword',
				attackType: 'standard',
				onHitStack: [{
					mechanic : 'damage',
					effect : 'physical',
					type : 'slashing',
					dieRolls : 1,
					dieSides : 6
				}],
				toHitStack: [{
					modifier : 0
				}]
			}
		)
		actor = new Actor(
			{
				attacks : [attack], 
				defenses : [],
				toHitStack : [	
					{}
				],
				toAvoidStack : [],
				onHitStack : [],
				proficiencyBonus : 0,
				attributes: 	{
					'str':10,
					'dex':10,
					'con':10,
					'wis':10,
					'int':10,
					'cha':10
				}

			}
		)
		attack.owner = actor
	})

	it('should have an toHit value', function(){
		var toHit = attack.toHit()
		assert.isAbove(toHit, 0)
	})
	it('should have a onHit value', function(){
		var onHit = attack.onHit({})
		assert.isObject(onHit)
	})
})
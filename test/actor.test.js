var assert = require('chai').assert;
var Actor = require('../actor.js')
var Attack = require('../attack.js')
var Defense = require('../defense.js')

describe('An Actor', function(){
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
		defense = new Defense({})
		actor = new Actor(
			{
				attacks : [attack], 
				defenses : [defense],
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
		defense.owner = actor
	})
	it('should have an array of attacks', function(){
		assert.equal(actor.attacks.length, 1)
	})
	it('should roll initiative', function(){
		assert.isAbove(actor.rollInitiative(), 0)
	})
	it('should choose an attack', function(){
		var attack = actor.chooseAttack()
		assert.isObject(attack)
	})
	it('should have a to hit')
})
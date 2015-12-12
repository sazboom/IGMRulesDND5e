var assert = require('chai').assert;
var Actor = require('../actor.js')
var Attack = require('../attack.js')
var Defense = require('../defense.js')

describe('An Actor', function(){
	before(function(){
		actor = new Actor('igm-data/Database/dnd5basic/actors/guard')
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
})
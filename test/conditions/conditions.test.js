var assert = require('chai').assert;
var extend = require('extend');

var ActorFactory = require('../../actors/actorFactory.js');
var actorFactory = new ActorFactory();
var dnd5ePC = actorFactory.createCharacter({});

describe('DND5E Conditions', function(){

	it('character should not have the condition', function(){
		assert.isFalse(dnd5ePC.hasCondition('dazed'))
	})
	it('character can have a condition set', function(){
		dnd5ePC.addCondition(
			{
				keyword: 'dazed'
			}
		)
		assert.isTrue(dnd5ePC.hasCondition('dazed'))
	})
	it('character can have a condition removed', function(){
		dnd5ePC.addCondition(
			{
				keyword: 'dazed'
			}
		)
		assert.isTrue(dnd5ePC.hasCondition('dazed'))
		dnd5ePC.removeCondition('dazed')
		assert.isFalse(dnd5ePC.hasCondition('dazed'))
	})

})
var assert = require('chai').assert;
var extend = require('extend');
var mockery = require('mockery')


describe('DND5E Conditions', function(){

	  
	  beforeEach(function(){
	    dnd5ePC = actorFactory.createCharacter({});
	    
	  })

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
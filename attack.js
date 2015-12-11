var dice = require('igm-utils/igmBaseDice')
var damage = require('./damage')
// var condition = require('./condition')
// var position = require('./position')
// var ongoing = require('./ongoing')

function Attack(profile){
	this.owner = null 
	this.stack = profile.stack || []
	this.shortName = profile.shortName || "sword"
	this.longName = profile.longName || "a sword"
	this.attackType = profile.attackType || 'standard'
	this.onHitStack = profile.onHitStack || [{
		mechanic : 'damage',
		effect : 'physical',
		type : 'slashing',
		dieRolls : 1,
		dieSides : 6
	}]
	this.toHitStack = profile.toHitStack || [{
		modifier : 0
	}]

	this.isHit = function(defense){
		return this.toHit() > defense.toAvoid()
	}

	this.toHit = function(){
		var attackValue = dice.roll(1,20)
		var stacks = [
			this.toHitStack,
			this.owner.toHitStack
		]

		this.walkStacks(stacks, {attackValue: attackValue}, function(profile, options){
			optins.attackValue += profile.modifier
			return options.attackValue
		})

		return attackValue
	}


	this.onHit = function(effect){
		var stacks = [
			this.onHitStack, 
			this.owner.onHitStack
		]

		this.walkStacks(stacks, {effect:effect}, function(profile, options){
			options.effect = this[profile.mechanic][profile.effect](options.effect)
			return options.effect
		})

		return effect
	}

	this.onMiss = function(){

	}

	this.walkStacks = function(stacks, options, callback){
		for( var n in stacks){
			var stack = stacks[n]
			for(var i in stack){
				var profile = this.stack[i]
				profile.owner = this.owner
				callback(profile, options)
			}
		}
	}


	
}

module.exports = Attack

var dice = require('igm-utils/igmBaseDice')
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
	this.damage = require('./damage')

	this.isHit = function(defense){
		return this.toHit() > defense.toAvoid()
	}

	this.toHit = function(){
		var attackValue = dice.roll(1,20)
		var stacks = [
			this.toHitStack,
			this.owner.toHitStack
		]
		for( var n in stacks){
			var stack = stacks[n]
			for(var i in stack){
				var profile = stack[i]
				if(profile.modifier){
					attackValue += profile.modifier	
				}
			}
		}

		return attackValue
	}


	this.onHit = function(effect){
		var stacks = [
			this.onHitStack, 
			this.owner.onHitStack
		]
		debugger;

		for( var n in stacks){
			var stack = stacks[n]
			for(var i in stack){
				var profile = stack[i]
				profile.owner = this.owner
				debugger;
				if(profile.mechanic && profile.effect){
					effect = this[profile.mechanic][profile.effect](profile)
				}
			}
		}

		return effect
	}

	this.onMiss = function(){

	}



	
}

module.exports = Attack

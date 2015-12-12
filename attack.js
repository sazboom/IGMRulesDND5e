var extend = require('util')._extend;
var dice = require('igm-utils/igmBaseDice')
var damage = require('./damage')
// var condition = require('./condition')
// var position = require('./position')
// var ongoing = require('./ongoing')

function Attack(profilePath){
	var profile = require(profilePath)
	extend(this, profile)


	this.owner = null 
	this.stack = profile.stack || []
	this.damage = damage


	this.isHit = function(defense){
		return this.toHit() > defense.toAvoid()
	}

	this.toHit = function(resultObj){
		var stacks = [
			this.toHitStack,
			this.owner.toHitStack
		]

		resultObj.hits = {}
		resultObj.hitArray = []
		resultObj.hitBonus = 0
		
		resultObj.attackRoll = dice.roll(1,20)
		
		for( var n in stacks){
			var stack = stacks[n]
			for(var i in stack){
				var profile = stack[i]
				if(profile.datatype === 'static'){
					resultObj.hits['hitObj'+i] = {}
					extend(resultObj.hits['hitObj'+i], profile)
					resultObj.hitArray.push(profile)
					resultObj.hitBonus += profile.bonus
				}
			}
		}

		return resultObj
	}


	this.onHit = function(resultObj){
		var stacks = [
			this.onHitStack, 
			this.owner.onHitStack
		]
		resultObj.damage = {}
		resultObj.damageArray = []
		resultObj.damageTotal = 0
		// resultObj.conditions = []
		// resultObj.positions = []
		// resultObj.ongoing = []

		for( var n in stacks){
			var stack = stacks[n]
			for(var i in stack){
				var profile = stack[i]
				if(profile.datatype === 'static'){
					resultObj.damage['damageObjs'+n+i] = profile
					resultObj.damageTotal += profile.bonus 
				}
				else if(profile.mechanic){
					resultObj.damage['damageObjs'+n+i] = this[profile.mechanic][profile.effect](profile)
					
					resultObj.damageTotal += resultObj.damage['damageObjs'+n+i].damageValue
				}
				resultObj.damageArray.push(resultObj.damage['damageObjs'+n+i])
			}
		}

		return resultObj
	}

	this.onMiss = function(){

	}



	
}

module.exports = Attack

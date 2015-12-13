var extend = require('util')._extend;
var dice = require('igm-utils/igmBaseDice')

function Defense(profilePath){
	var profile = require(profilePath)
	extend(this, profile)

	this.owner = null

	this.toAvoidHit = function(resultObj){
		var stacks = [
			this.toAvoidHitStack,
			this.owner.toAvoidHitStack
		]

		resultObj.avoidance = {}
		resultObj.avoidArray = []
		resultObj.avoidBonus = 0
		resultObj.avoidTotal = 0
		
		for( var n in stacks){
			var stack = stacks[n]
			for(var i in stack){
				var profile = stack[i]
				if(profile.datatype === 'static'){
					resultObj.avoidance['avoidObj'+i] = {}
					extend(resultObj.avoidance['avoidObj'+i], profile)
					resultObj.avoidArray.push(profile)
					resultObj.avoidBonus += profile.bonus
					resultObj.avoidTotal += profile.bonus
				}
			}
		}

		return resultObj
	}

	this.onHit = function(effect){
		return effect
	}
	
}

module.exports = Defense
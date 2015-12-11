var dice = require('igm-utils/igmBaseDice')
var damage = require('./damage')
// var condition = require('./condition')
// var position = require('./position')
// var ongoing = require('./ongoing')


function Actor(profile){
	this.attacks = profile.attacks || []
	this.defenses = profile.defenses || []
	this.toHitStack = profile.toHitStack || []
	this.toAvoidStack = profile.toAvoidStack || []
	this.onHitStack = profile.onHitStack || []
	this.proficiencyBonus = profile.proficiencyBonus || 0
	this.attributes = profile.abilityArray ||
		{
			'str':10,
			'dex':10,
			'con':10,
			'wis':10,
			'int':10,
			'cha':10
		}

	this.abilityModifier = function(attribute){
		return Math.floor((this.attributes[attribute] - 10)/2)
	}

	this.rollInitiative = function(){
		return dice.roll(1,20)
	}

	this.chooseAttack = function(){
		return this.attacks[0]
	}

	this.onHit = function(effect){
		for(var i in this.onHitStack){
			var profile = this.onHitStack[i]
			profile.owner = this
				effect.damage.add(this[profile.effect](profile))
		}
		return effect
	}

}

module.exports = Actor
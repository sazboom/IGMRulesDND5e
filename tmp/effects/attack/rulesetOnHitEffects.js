var dice = require('igm-utils/igmBaseDice.js');

function DND5EOnHitEffects(){
	this.physicalDamage = function(attacker, attack, defender, defense, options){
		defense.physicalDamage(dice.roll(this.dieRolls,this.damageDie) + attacker.damageBonus, options)
	}
	this.elementalDamage = function(attacker, attack, defender, defense, options){
		defense.elementalDamage(dice.roll(this.dieRolls,this.damageDie) + attacker.damageBonus, options)
	}
}

module.exports = DND5EOnHitEffects



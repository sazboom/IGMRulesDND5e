var extend = require('util')._extend;
var DND5eOnHitEffects = require('../effects/defense/rulesetOnHitDefenseEffects.js');
var dnd5eOnHitEffects = new DND5eOnHitEffects()
var DND5eOnMissEffects = require('../effects/defense/rulesetOnMissDefenseEffects.js');
var dnd5eOnMissEffects = new DND5eOnMissEffects()

function DND5EBaseDefense(owner, template){
	var baseAttack = {
		owner: owner,
		name: null,
		desc: null,
		defenseBonus: 0,
		onHitEffects: [],
		onMissEffects:[],
		onHit: function(attacker, defender, defense){
			for(var i in this.onHitEffects){
				this[this.onHitEffects[i]](attacker, this, defender, defense)
			}
		},
		onMiss: function(attacker, defender, defense){
			for(var i in this.onMissEffects){
				this[this.onMissEffects[i]](attacker, this, defender, defense)
			}
		},
	}
	extend(baseAttack, dnd5eOnHitEffects);
	extend(baseAttack, dnd5eOnMissEffects);
	extend(baseAttack, template);
	return baseAttack;
}

module.exports = DND5EBaseDefense
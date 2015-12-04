var extend = require('util')._extend;
var DND5eOnHitEffects = require('../effects/attack/rulesetOnHitEffects.js');
var dnd5eOnHitEffects = new DND5eOnHitEffects()
var DND5eOnMissEffects = require('../effects/attack/rulesetOnMissEffects.js');
var dnd5eOnMissEffects = new DND5eOnMissEffects()

function DND5EBaseAttack(owner, template){
	var baseAttack = {
		owner: owner,
		name: null,
		desc: null,
		attackAgainst: null,	
		saveAgainst: null,
		target: null,
		area: 0,
		range: 0,
		attackBonus: 0,
		damageBonus: 0,
		damageDie: 0,
		dieRolls: 0,
		onHitEffects: [],
		onMissEffects:[],
		onHit: function(attacker, defender, defense){
			for(var i in this.onHitEffects){
				var obj = this.onHitEffects[i]
				this[obj.effect](attacker, this, defender, defense, obj.options)
			}
		},
		onMiss: function(attacker, defender, defense){
			for(var i in this.onMissEffects){
				this[this.onMissEffects[i].effect](attacker, this, defender, defense, options)
			}
		},
		willAutoHit: function(){
			if(this.preHitEffects){
				for(var i = 0, len = this.preHitEffects.length; i < len; i++) {
				    if (this.preHitEffects[i].effect === 'autoHit') {
				        return true
				    }
				}
			}
			return false
		}
	}
	extend(baseAttack, dnd5eOnHitEffects);
	extend(baseAttack, dnd5eOnMissEffects);
	extend(baseAttack, template);

	return baseAttack;
}

module.exports = DND5EBaseAttack
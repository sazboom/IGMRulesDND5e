var IGMBaseConflict = require('igm-core/conflicts/igmBaseConflict.js')

function DND5EConflict(options){
	this.attacker = options.attacker;
	this.defender = options.defender;
	this.attack = options.attack;
	this.defense = options.defense;
	this.attackValue = 0;
	this.adjustedAttackValue = 0;
	this.damageValue = 0;
	this.adjustedDamageValue = 0;

	this.calculateAttackValue = function(){
			if (this.attackValue){
				//noop
			}
			else if (this.attack.saveAgainst){
				this.attackValue = this.attacker.calculateSaveValue(this.attack)
			}
			else{
				this.attackValue = this.attacker.calculateAttackValue();
			}
		return this.attackValue
	}
	this.calculateHitAvoidance = function(){
		return this.defender.calculateHitAvoidance();
	}
	this.isHit = function(){
		if(this.attack.willAutoHit()){
			return true
		}
		else{
			return this.calculateAttackValue() > this.calculateHitAvoidance();
		}
	}
	this.onHit = function(){

		this.attack.onHit(this.attacker, this.defender, this.defense)
	}
	this.onMiss = function(){
		this.attack.onMiss(this.attacker, this.defender, this.defense)
	}
	this.calculateDamageValue = function(){
		this.damageValue = this.damageValue || this.defender.calculateDamageValue();
		return this.damageValue;
	}
	this.calculateAdjustedDamageValue = function(){
		this.adjustedDamageValue = this.adjustedDamageValue || this.defender.adjustDamageValue(this.damageValue);
		return this.adjustedDamageValue;
	}
	this.applyDamage = function(){
		this.defender.applyDamage(this.calculateAdjustedDamageValue())
	}
}

DND5EConflict.prototype = new IGMBaseConflict()

module.exports = DND5EConflict



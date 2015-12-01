var IGMBaseActor = require('igm-mock-core/actors/igmBaseActor.js')
var dice = require('igm-mock-core/dice/igmBaseDice.js');



function DND5EBaseActor(options){
	this.attackBonus = options.attackBonus || 0;
	this.damageBonus = options.damageBonus || 0;
	this.damageDie = options.damageDie || 0;
	this.damageModification = options.damageModification || 0;
	this.hitAvoidance = options.hitAvoidance || 0;
	this.healthValue = options.healthValue || 1;
	this.name = options.name || 'Character';
	this.desc = options.desc || 'A Character';
	this.conditions = [];
	this.attributes = options.attributes || 
		{'str':10,'dex':10,'con':10,'wis':10,'int':10, 'cha':10};
	this.spellSaveDC = options.spellSaveDC || 13;


	this.calculateBonus = function(attr){
		if(attr===10){
			return 0
		}
		else{
			return Math.floor((this.attributes[attr] - 10)/2)
		}
	}

	this.calculateAttackValue = function(){
		return dice.roll(1,20)+this.attackBonus
	}

	this.calculateSaveValue = function(attack){
		var save = dice.roll(1,20)
		save += this.calculateBonus(this.attributes[attack.saveAgainst])
		return save
	}
	
	this.calculateHitAvoidance = function(){
		this.hitAvoidance = this.hitAvoidance || 10
		return this.hitAvoidance 
	}

	this.adjustDamageValue = function(damage){
		return damage - this.damageModification;
	}
	this.applyDamage = function(damage){
		this.healthValue = this.healthValue - damage;
	}

	this.calculateInitiative = function(){
		return Math.floor((Math.random() * 19) + 1)
	}

}

DND5EBaseActor.prototype = new IGMBaseActor();



module.exports = DND5EBaseActor
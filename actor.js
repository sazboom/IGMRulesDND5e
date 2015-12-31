var extend = require('util')._extend;
var dice = require('igm-utils/igmBaseDice')
var damage = require('./damage.js')
var Attack = require('./attack.js')
var Defense = require('./defense.js')
// var condition = require('./condition')
// var position = require('./position')
// var ongoing = require('./ongoing')


function Actor(profilePath){
	var profile = require(profilePath)
	extend(this, profile)
	this.attacks = []
	this.attackObjs = {}
	for(var i in this.attackPaths){
		this.attackObjs['attack'+i] = new Attack(this.attackPaths[i])
		this.attackObjs['attack'+i].owner = this
		this.attacks.push(this.attackObjs['attack'+i])
	}

	this.defenses = []
	this.defenseObjs = {}
	for(var i in this.defensePaths){
		this.defenseObjs['defense'+i] = new Defense(this.defensePaths[i])
		this.defenseObjs['defense'+i].owner = this
		this.defenses.push(this.defenseObjs['defense'+i])
	}

	this.abilityModifier = function(attribute){
		return Math.floor((this.attributes[attribute] - 10)/2)
	}

	this.rollInitiative = function(){
		return dice.roll(1,20)
	}

	this.chooseAIAttack = function(){
		return this.attacks[0]
	}

	this.chooseAttack = function(attack){
		return this.attacks[attack]
	}

	this.chooseAIDefense = function(){
		return this.defenses[0]
	}


}

module.exports = Actor
var extend = require('util')._extend;
var dice = require('igm-utils/igmBaseDice')
var damage = require('./damage.js')
var Attack = require('./attack.js')
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
		this.attacks.push(this.attackObjs['attack'+i])
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


}

module.exports = Actor
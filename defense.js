function Defense(profile){
	this.defenseBonus = profile.defenseBonus || 0

	this.toAvoid = function(){
		var baseDefense = 10
		var defenseBonus = this.defenseBonus
		for(var i in this.owner.toAvoidStack){
			defenseBonus += this.owner.toAvoidStack[i].modifier
		}
		return baseDefense + defenseBonus
	}

	this.onHit = function(effect){
		return effect
	}
	
}

module.exports = Defense
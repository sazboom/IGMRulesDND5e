var dice = require('igm-utils/igmBaseDice')
var damage = {
	physical : function(profile){
		var dmg = dice.roll(profile.dieRolls, profile.dieSides)
		dmg += profile.owner.abilityModifier('str')
		dmg += profile.owner.proficiencyBonus
		return {
			type: profile.type,
			value : dmg
		}
	} 

}

module.exports = damage
var extend = require('util')._extend;
var dice = require('igm-utils/igmBaseDice')
var Resistance = {
	armor : function(resultObj){
		resultObj.damageValue = dice.roll(resultObj.dieRolls, resultObj.dieSides)
		return resultObj
	} 

}

module.exports = Damage
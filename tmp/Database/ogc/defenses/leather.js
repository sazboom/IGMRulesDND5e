var aaronArmor = {
	default: {
		defenseBonus:1,
		affectHealth: function(defender, damage, type){
			this.owner.applyDamage(damage);
		}	
	}
}

module.exports = aaronArmor
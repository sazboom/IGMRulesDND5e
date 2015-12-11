var aaronSword = {
	default: {	
		name: 'Short sword',
		desc: 'A short sword',
		attackAgainst: 'armor',
		target: 'single',
		attackBonus: 0,
		damageBonus: 0,
		damageDie: 6,
		dieRolls: 1,
		onHitEffects: [
			{
				effect: 'physicalDamage',
				type: 'slashing',
				magical: false
			}
		]
	}
}

module.exports = aaronSword
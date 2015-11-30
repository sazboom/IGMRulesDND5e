var fireball = {
	default: {
		name: 'Fireball',
		desc: 'A ball of fire',	
		spellAttack: true,
		saveAgainst: 'dex',
		target: 'multi',
		area: 20,
		range: 120,
		attackBonus: 0,
		damageBonus: 0,
		damageDie: 6,
		dieRolls: 8,
		onHitEffects: [
			{
				effect: 'elementalDamage',
				options: {
					damageType: 'fire'
				}
			}
		],
		onMissEffects: [
			{
				effect: 'halfDamage',
				options: {
					damageType: 'fire'
				}
			}
		],
	}
}

module.exports = fireball
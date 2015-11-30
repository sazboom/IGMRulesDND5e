var magicMissile = {
	default: {
		name: 'Magic Missile',
		desc: 'A bolt of force',
		spellAttack: true,
		attackAgainst: 'armor',
		target: 'single',
		range: 60,
		attackBonus: 0,
		damageDie: 4,
		dieRolls: 1,
		onHitEffects: [
			{
				effect: 'elementalDamage',
				options: {
					damageType: 'force'
				}
			}
		],
		preHitEffects: [
			{
				effect: 'autoHit'
			}
		]
	}
}

module.exports = magicMissile
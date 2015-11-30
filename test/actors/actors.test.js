var assert = require('chai').assert;

var ActorFactory = require('../../actors/actorFactory.js');
var actorFactory = new ActorFactory();


describe('DND5E Character', function(){
	var gerblin = actorFactory.createEnemy({
		name: 'Gerblin',
		desc: 'A Gerblin',
		meleeAttack : {
			name: 'sword',
			damageType: 'slashing',
			damageDie: 6,
			damageDieRolls: 1,
		},
		attackBonus : 4,
		damageBonus : 4,
		hitAvoidance : 10,
		healthValue : 11
	});
	var dnd5eEnemy1 = actorFactory.createEnemy({}); 
	it('should have a name', function(){
		assert.equal(gerblin.name, 'Gerblin')
	})
	it('should have a description', function(){
		assert.equal(gerblin.desc, 'A Gerblin')
	})	
	it('should have hit avoidance of 10', function(){
		assert.equal(gerblin.hitAvoidance, 10)
	})
	it('should have an attack bonus of 4', function(){
		assert.equal(gerblin.attackBonus, 4)
	})
	it('should have a damage bonus of 4', function(){
		assert.equal(gerblin.damageBonus, 4)
	})
	it('should have a hit avoidance of 10', function(){
		assert.equal(gerblin.hitAvoidance, 10)
	})
	it('should have a health value of 11', function(){
		assert.equal(gerblin.healthValue, 11)
	})
	it('should calculate an Attack Aalue', function(){
		assert.isNumber(gerblin.calculateAttackValue(gerblin.attacks[0]))
	})
	it('should calculate Hit Avoidance', function(){
		assert.isNumber(gerblin.calculateHitAvoidance())
	})
	it('should adjust damage', function(){
		assert.isNumber(gerblin.adjustDamageValue(10));
	})
	it('should apply damage', function(){
		gerblin.applyDamage(1);
		assert.isBelow(gerblin.healthValue, 11);
	})
	it('should have an attack from the database', function(){
		assert.isAbove(gerblin.attacks.length, 0);
	})
	describe('with an Attack from DB', function(){
		it('should send damage to a defense on hit', function(){
			var hp = gerblin.healthValue;
			gerblin.attacks[0].onHit(gerblin,{},gerblin.defenses[0])
			assert.isBelow(gerblin.healthValue, hp);
		})
	})

})


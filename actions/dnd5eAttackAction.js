var DND5EBaseAction = require('./dnd5eBaseAction.js');
var DND5EConflict = require('./dnd5eConflict.js');


function DND5EAttackAction(attacker, targets, options){
	this.attacker = attacker;
	this.targets = targets;
	this.attack = options.attack;
	this.conflicts = [];
	for(var i = 0; i < this.targets.length; i++){
		var defender = this.targets[i]
		var conflict = new DND5EConflict({
			attacker : this.attacker,
			defender : defender,
			attack : this.attack,
			defense : defender.defenses[0]
		})
		this.conflicts.push(conflict)
	}
}
DND5EAttackAction.prototype = new DND5EBaseAction()

module.exports = DND5EAttackAction
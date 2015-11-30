var DND5EBaseAction = require('./dnd5eBaseAction.js');
var DND5EConflict = require('./dnd5eConflict.js');


function DND5ECastAction(attacker, targets, options){
	this.attacker = attacker;
	this.targets = targets;
	this.conflicts = [];
	for(var i = 0; i < this.targets.length; i++){
		var conflict = new DND5EConflict({
			attacker : this.attacker,
			target : this.targets[i],
		})
		this.conflicts.push(conflict)
	}
}
DND5ECastAction.prototype = new DND5EBaseAction()

module.exports = DND5ECastAction
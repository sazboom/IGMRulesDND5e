var DND5EAttackAction = require('../actions/rulesetAttackAction.js');
var DND5ECastAction = require('../actions/rulesetCastAction.js');

function DND5EBaseActionMixin(){

	this.createAction = function(actionStr, round, targets, options){
		switch(actionStr){
			case 'Attack':
				var action = new DND5EAttackAction(this, targets, options)
				break;
			case 'Cast':
				var action = new DND5ECastAction(this, targets, options)
				break;
		}

		round.ownerAction = action;
		return action;
		
	}
}

module.exports = DND5EBaseActionMixin
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewBudgetPage } from '../../pages/new-budget/new-budget';
import { BudgetPage } from '../../pages/budget/budget';

/**
 * Generated class for the StartContainerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'start-container',
  templateUrl: 'start-container.html'
})
export class StartContainerComponent {

	currentBudget: boolean = false;

	constructor(private _nc: NavController) {
		
	}

	goToCurrentBudget(){
		this._nc.push(BudgetPage);
	}

	makeNewBudget(){
		this._nc.push(NewBudgetPage);
	}

}

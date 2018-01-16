import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InfoBtnComponent } from '../info-btn/info-btn';
import { HomePage } from '../../pages/home/home';
import { HistoryModalComponent } from '../history-modal/history-modal';
import { BankModalComponent } from '../bank-modal/bank-modal';

/**
 * Generated class for the NavFabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'nav-fab',
  templateUrl: 'nav-fab.html'
})
export class NavFabComponent {

	@Input() hideExtra: boolean = false;

	constructor(private _mc: ModalController, private _nc: NavController) {
	}

	home(){
		this._nc.popToRoot();
	}

	history(){
		let historyModal = this._mc.create(HistoryModalComponent);
		historyModal.present();
	}

	bankM(){
		let bankModal = this._mc.create(BankModalComponent);
		bankModal.present();
	}

}

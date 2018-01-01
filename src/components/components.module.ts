import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar';
import { LogoComponent } from './logo/logo';
import { StartContainerComponent } from './start-container/start-container';
import { CreatorComponent } from './creator/creator';
import { NewbudgetComponent } from './newbudget/newbudget';
import { HomeBtnComponent } from './home-btn/home-btn';
import { InfoBtnComponent } from './info-btn/info-btn';
import { BudgetComponent } from './budget/budget';
import { SpendModalComponent } from './spend-modal/spend-modal';
@NgModule({
	declarations: [TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    HomeBtnComponent,
    InfoBtnComponent,
    BudgetComponent,
    SpendModalComponent],
	imports: [],
	exports: [TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    HomeBtnComponent,
    InfoBtnComponent,
    BudgetComponent,
    SpendModalComponent]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar';
import { LogoComponent } from './logo/logo';
import { StartContainerComponent } from './start-container/start-container';
import { CreatorComponent } from './creator/creator';
import { NewbudgetComponent } from './newbudget/newbudget';
import { HomeBtnComponent } from './home-btn/home-btn';
import { InfoBtnComponent } from './info-btn/info-btn';
@NgModule({
	declarations: [TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    HomeBtnComponent,
    InfoBtnComponent],
	imports: [],
	exports: [TopbarComponent,
    LogoComponent,
    StartContainerComponent,
    CreatorComponent,
    NewbudgetComponent,
    HomeBtnComponent,
    InfoBtnComponent]
})
export class ComponentsModule {}

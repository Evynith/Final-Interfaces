import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './page/config/config.component';
import { HomeExternalComponent } from './page/home-external/home-external.component';
import { HomeInternalComponent } from './page/home-internal/home-internal.component';
import { ExploreComponent } from './page/explore/explore.component';
import { SearchComponent } from './page/search/search.component';
import { SaveComponent } from './page/save/save.component';
import { NoticeComponent } from './page/notice/notice.component';
import { DetailsComponent } from './page/details/details.component';
import { OpinionComponent } from './component/opinion/opinion.component';
import { ElementAudiovisualComponent } from './component/element-audiovisual/element-audiovisual.component';
import { ButtonComponent } from './component/button/button.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
import { PlanComponent } from './component/plan/plan.component';
import { InputComponent } from './component/input/input.component';
import { ModalComponent } from './component/modal/modal.component';
import { ListAudiovisualComponent } from './component/list-audiovisual/list-audiovisual.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HomeExternalComponent,
    HomeInternalComponent,
    ExploreComponent,
    SearchComponent,
    SaveComponent,
    NoticeComponent,
    DetailsComponent,
    OpinionComponent,
    ElementAudiovisualComponent,
    ButtonComponent,
    FooterComponent,
    NavComponent,
    PlanComponent,
    InputComponent,
    ModalComponent,
    ListAudiovisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

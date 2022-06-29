import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeExternalComponent } from './page/home-external/home-external.component';
import { HomeInternalComponent } from './page/home-internal/home-internal.component';
import { ExploreComponent } from './page/explore/explore.component';
import { SearchComponent } from './page/search/search.component';
import { SaveComponent } from './page/save/save.component';
import { ConfigComponent } from './page/config/config.component';
import { DesguardGuard } from './guard/desguard.guard';
import { LoginService } from './service/login.service';

const routes: Routes = [
  { path: 'inicio', component: (() => {
    return LoginService.islogin() == true ? HomeInternalComponent : HomeExternalComponent;
  })() },
  { path: 'explorar', component: ExploreComponent, canActivate : [DesguardGuard]  },
  { path: 'buscar', component: SearchComponent, canActivate : [DesguardGuard]  },
  { path: 'guardados', component: SaveComponent, canActivate : [DesguardGuard]  },
  { path: 'configuracion', component: ConfigComponent, canActivate : [DesguardGuard] },
  { path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(login : LoginService){

  }
}
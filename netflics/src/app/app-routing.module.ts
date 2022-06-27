import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeExternalComponent } from './page/home-external/home-external.component';
import { HomeInternalComponent } from './page/home-internal/home-internal.component';
import { ExploreComponent } from './page/explore/explore.component';
import { SearchComponent } from './page/search/search.component';
import { SaveComponent } from './page/save/save.component';
import { ConfigComponent } from './page/config/config.component';

const routes: Routes = [
  { path: 'home', component: HomeExternalComponent },
  { path: 'home2', component: HomeInternalComponent },
  { path: 'explorar', component: ExploreComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'guardados', component: SaveComponent },
  { path: 'configuracion', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
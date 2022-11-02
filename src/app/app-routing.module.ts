import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './project-modules/about-us/about-us.component';
import { HomePageComponent } from './project-modules/home/home-page/home-page.component';
import { ExploreMenuComponent } from './project-modules/explore-menu/explore-menu.component';


const routes : Routes = [
  {
    path : 'home',
    component : HomePageComponent
  },
  {
    path : 'explore-menu',
    component : ExploreMenuComponent
  },
  {
    path : 'home',
    component : HomePageComponent
  },
  {
    path : '',
    redirectTo : '/home',
    pathMatch : 'full'
  },
  {
    path : 'about-us',
    component : AboutUsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DishBoxInCurationComponent } from '../custom-elements/dish-box-in-curation/dish-box-in-curation.component';

@NgModule({
  declarations: [HomePageComponent,DishBoxInCurationComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

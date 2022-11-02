import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DishBoxInCurationComponent } from './dish-box-in-curation/dish-box-in-curation.component';
import { UpperPannelComponent } from './upper-pannel/upper-pannel.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [DishBoxInCurationComponent, UpperPannelComponent, PopupComponent],
  imports: [
    CommonModule
  ]
})
export class CustomElementsModule { }

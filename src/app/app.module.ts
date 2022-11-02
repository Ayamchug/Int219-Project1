import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './project-modules/about-us/about-us.component';
import { DishBoxInCurationComponent } from './project-modules/custom-elements/dish-box-in-curation/dish-box-in-curation.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './project-modules/home/home-page/home-page.component';
import { ExploreMenuComponent } from './project-modules/explore-menu/explore-menu.component';
import { UpperPannelComponent } from './project-modules/custom-elements/upper-pannel/upper-pannel.component';
import { PopupComponent } from './project-modules/custom-elements/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    DishBoxInCurationComponent,
    UpperPannelComponent,
    ExploreMenuComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
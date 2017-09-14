import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserDetailComponent } from './user-detail.component';
import { CompanyDetailComponent } from './company-detail.component';
import { GoodsDetailComponent } from './goods-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    UserDetailComponent,
    CompanyDetailComponent,
    GoodsDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

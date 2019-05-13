import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpAComponent } from './cmp-a.component';
import { CmaBComponent } from './cma-b.component';
import { CmpBComponent } from './cmp-b/cmp-b.component';
import {LoginService} from './login.service'

@NgModule({
  declarations: [
    AppComponent,
    CmpAComponent,
    CmaBComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

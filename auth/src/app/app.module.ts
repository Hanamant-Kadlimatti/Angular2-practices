import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from'@angular/forms';

import {routing} from './app.routes';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { SignupComponent } from './unprotected/signup.component';
import {SignInComponent} from './unprotected/signin.component'
import {HeaderComponent} from './shared/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProtectedComponent,
    SignupComponent,
    SignInComponent,
    
  ],
  imports: [
    BrowserModule,
      // FormGroup,
      FormsModule,
      ReactiveFormsModule,
      routing ,
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

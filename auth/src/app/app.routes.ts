import {Routes, RouterModule} from '@angular/router'

import {SignupComponent} from './unprotected/signup.component';
import {SignInComponent} from './unprotected/signin.component';
import {ProtectedComponent} from './protected/protected.component';

export const APP_ROUTES: Routes =[
    {path: '', redirectTo: '/signup', pathMatch: 'full'},
       {path: 'signup', component: SignupComponent},
       {path: 'signin', component: SignInComponent},
       {path: 'protected', component: ProtectedComponent}
]

export const routing  = RouterModule.forRoot(APP_ROUTES)
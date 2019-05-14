import {Routes, RouterModule,} from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { USER_ROUTES } from './user/user.route';
 
const APP_ROUTES: Routes = [
// const APP_ROUTES: RouterConfig = [
//  {path: '', component: HomeComponent},
//  {path: 'user', component: UserComponent}


//  using parameter router

// user redirecting starts
  {path: 'user', redirectTo:'/user/1', pathMatch:'full'},
// user redirecting ends
{path: '', component: HomeComponent},
 {path: 'user/:id', component: UserComponent},
//  {path: 'user/:id', component: UserComponent, children: USER_ROUTES }
{path: '**', component: UserComponent, children: USER_ROUTES }
]

export const routing  = RouterModule.forRoot(APP_ROUTES)

// export const APP_ROUTES_PROVIDER  = [
//     provideRouter(APP_ROUTES)
// ]
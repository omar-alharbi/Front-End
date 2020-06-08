import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegComponent } from './reg/reg.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { RegOrgComponent } from './reg-org/reg-org.component';
import { AboutComponent } from './about/about.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeOrgComponent } from './home-org/home-org.component';
import { SendRequestComponent } from './send-request/send-request.component';
import  {HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegComponent },
  { path: 'reg-user', component: RegUserComponent },
  { path: 'reg-org', component: RegOrgComponent },
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home-user', component: HomeUserComponent },
  { path: 'home-org', component: HomeOrgComponent },
  { path: 'send-request', component: SendRequestComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent ,LoginComponent , UserComponent ,RegComponent ,RegUserComponent , RegOrgComponent ,AboutComponent, HomeUserComponent,HomeOrgComponent,SendRequestComponent]
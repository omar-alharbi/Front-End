import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { RegComponent } from './reg/reg.component';
import { GetService } from 'src/services/get.service';
import { AboutComponent } from './about/about.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeOrgComponent } from './home-org/home-org.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegSuccessfulComponent } from './reg-successful/reg-successful.component';
import { Ng2Webstorage } from 'ngx-webstorage';
import { RegOrgComponent } from './reg-org/reg-org.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegUserComponent,
    RegComponent,
    AboutComponent,
    HomeUserComponent,
    HomeOrgComponent,
    SendRequestComponent,
    HomeComponent,
    RegSuccessfulComponent,
    RegOrgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage.forRoot(),
    RouterModule.forRoot ( [
      { path:'register-seuccefull', component: RegSuccessfulComponent },
      { path:'home-user', component: HomeUserComponent },

    ]),
    HttpClientModule
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

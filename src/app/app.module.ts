import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComingComponent } from './coming/coming.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerloginComponent,
    SellerloginComponent,
    DashboardComponent,
    ComingComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SignupComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

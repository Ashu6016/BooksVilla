import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'sellerogin',component:SellerloginComponent},
  {path:'buyerlogin',component:BuyerloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'',redirectTo:'buyerlogin',pathMatch:"full"},
  {path:'dashboard',component:DashboardComponent}
  // {path:'',redirectTo:'signup',pathMatch:"full"}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

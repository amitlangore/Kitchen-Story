import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/about-us/about-us.component';
import { AddComponent } from 'src/add/add.component';
import { AdminLoginComponent } from 'src/admin-login/admin-login.component';
import { AdminComponent } from 'src/admin/admin.component';
import { CheckoutComponent } from 'src/checkout/checkout.component';
import { ContactUsComponent } from 'src/contact-us/contact-us.component';
import { HomeComponent } from 'src/home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { ProductEditComponent } from 'src/product-edit/product-edit.component';
import { ResetPasswordComponent } from 'src/reset-password/reset-password.component';
import { ShoppingCartComponent} from 'src/shopping-cart/shopping-cart.component';
import { ThankyouComponent } from 'src/thankyou/thankyou.component';
import { UserSignupComponent } from 'src/user-signup/user-signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'cart',component:ShoppingCartComponent},
  {path:'home',component:HomeComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'thankyou',component:ThankyouComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserSignupComponent},
  {path:'edit/:id',component:ProductEditComponent},
  {path:'add',component:AddComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'changepassword',component:ResetPasswordComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

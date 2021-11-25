import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from 'src/home/home.component';
import { AppComponent } from './app.component';
import { AboutUsComponent } from 'src/about-us/about-us.component';
import { ContactUsComponent } from 'src/contact-us/contact-us.component';
import { ShoppingCartComponent } from 'src/shopping-cart/shopping-cart.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';
import { FooterComponent } from '../footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from '../admin/admin.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { UserSignupComponent } from '../user-signup/user-signup.component';
import { AddComponent } from '../add/add.component';
import { LoginComponent } from '../login/login.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ShoppingCartComponent,
    NavbarComponent,
    CheckoutComponent,
    ThankyouComponent,
    FooterComponent,
    AdminComponent,
    AdminNavbarComponent,
    ProductEditComponent,
    UserSignupComponent,
    AddComponent,
    LoginComponent,
    AdminLoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { SubmitSuccessComponent } from "./submit-success/submit-success.component";
import { NgOtpInputModule } from 'ng-otp-input';
import { MatchPasswordDirective } from "./directives/match-password.directive";
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { OTPformComponent } from './otpform/otpform.component';

// import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

    HomeComponent,
    SubmitSuccessComponent,
    LoginComponent,
    MatchPasswordDirective,
    UserLoginComponent,
    LoginuserComponent,
    RegisteruserComponent,
    OTPformComponent,
  
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgOtpInputModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "submit", component: SubmitSuccessComponent },
      { path: "user-login", component: UserLoginComponent },
      { path: "login", component: LoginComponent},
      { path: "loginuser", component: LoginuserComponent },
      { path: "otpform", component: OTPformComponent },
      { path: "registeruser", component: RegisteruserComponent },
    ]),
  ],
bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { ValidationErrors,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent  {
  [x: string]: any;
  loginobj:any={
    email:'',
    password:''
  }
  emailAddress: string = "";
  password:string="";
  redirectToPage: string = "./submit";
  emailValidateMessage: string = '';
  PasswordValidateMessage:string = '';
 
  constructor(private router: Router) {

  }

  ngOnInit() {
   
  }
//  LoginUser(login: NgForm) {
//   // this.checkValidationMsg(login) 
//   this.router.navigate(['/submit']);
//     this.redirectTo();
//   }
  

  redirectTo() {
    window.location.href = this.redirectToPage;
}

removeErrorMsg(fieldname: string) {
  if (fieldname == "password") {
    this.PasswordValidateMessage = "";
  }
  if (fieldname == "emailAddress") {
    this.emailValidateMessage = "";
  }
}

numbersOnly(event) {
  var reg = /^[0-9]+$/;
  return (reg.test(event.key));
};

checkValidationMsg(login: NgForm) {
  const isUserExist = this.registerUser.find(m => m.email == this.loginobj.email && m.password == this.loginobj.password);
  console.log("58,,,",isUserExist);
  if(isUserExist != undefined){
  alert('User loged in successfully')
  this.router.navigate(['/submit']);
  this.redirectTo();
 
  }
  else{
    alert('User does not exist')
  }

  let num: number = 0;
  this.password = login.value.password.trim();
  this.emailAddress = login.value.emailAddress.trim();
  if (this.password && this.password.length < 3) {
    this.PasswordValidateMessage = "lengthError";
    num += 1;
  }


  if (!this.Password) {
    this.PasswordValidateMessage = "required";
    num += 1;
  }
  if (this.emailAddress && this.validateEmailAddress() == 0) {
    this.emailValidateMessage = "invalid";
    num += 1;
  }
  if (!this.emailAddress) {
    this.emailValidateMessage = "required";
    num += 1;
  }
  if (num > 0) {
    return false;
  }
  return
}

validateEmailAddress() {
  if (this.emailAddress) {
    var lastChars = this.emailAddress.lastIndexOf(".");
    var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if (!expression.test(String(this.emailAddress).toLowerCase()) || this.emailAddress.substr(lastChars, 3).length < 3) {
      return 0;
    }
    else {
      return 1;
    }
  }
  return
}
 }

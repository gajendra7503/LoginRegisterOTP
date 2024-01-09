import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from "../models/user";
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent  {
  registerUser:any[]=[];
  registerUserobj:any={
    name:'',
    email:'',
    mobile:'',
    password:'',
    confirmPassword:''
  };
  form = {
    email:  '',
    mobile:  '',
    name:  '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
ngOnInit(): void {
  const localData=localStorage.getItem('registerUser');
  if(localData){
    this.registerUser=JSON.parse(localData);
  }
}
  onSubmit(): void {
    console.log("submit success",JSON.stringify(this.form, null));
    this.registerUser.push(this.registerUserobj);
    localStorage.setItem('registerUser', JSON.stringify(this.registerUser));
    this.registerUserobj={
      name:'',
      email:'',
      mobile:'',
      password:'',
      confirmPassword:''
    }
  }

  // onReset(form: NgForm): void {
  //   form.reset();
  // }
  protected userModal = new User();
 
  email: string = '';
  mobile: string = "";
  name: string = "";
  password: string = "";  
  cnfpassword: string = "";
  
  nameValidateMessage: string;
  emailValidateMessage: string;
  mobileValidateMessage: string;
  MobileDisplayLabel: any;
  submitStatus: string;

 alphaOnly(event) {
    var reg = /^[A-Za-z ]+$/;
    return (reg.test(event.key));
  };

  numbersOnly(event) {
    var reg = /^[0-9]+$/;
    return (reg.test(event.key));
  };


  removeErrorMsg(fieldname: string) {
    if (fieldname == "name") {
      this.nameValidateMessage = "";
    }
    if (fieldname == "email") {
      this.emailValidateMessage = "";
    }
    if (fieldname == "mobile") {
      this.mobileValidateMessage = "";
    }
  }

  isMobileWrong(){
    let firstDigit = this.mobile.substr(0, 1);
    if (firstDigit != '6' && firstDigit != '7' && firstDigit != '8' && firstDigit != '9') {
      return 0;
    }
    else if (this.mobile.match(/^(\d)\1+$/g)) {
      return 0;
    }
    else {
      return 1;
    }
  }

  validateEmailAddress() {
    if (this.email) {
      var lastChars = this.email.lastIndexOf(".");
      var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      if (!expression.test(String(this.email).toLowerCase()) || this.email.substr(lastChars, 3).length < 3) {
        return 0;
      }
      else {
        return 1;
      }
    }
  }

  checkPasswords(registerForm : NgForm) {
    this.password = registerForm.value.password.trim();
    this.cnfpassword = registerForm.value.cnfpassword.trim();
    return this.password === this.cnfpassword ? null : { notSame: true };
  }

  checkValidationMsg(registerForm: NgForm) {
    let num: number = 0;
    this.name = registerForm.value.name.trim();
    this.email = registerForm.value.email.trim();
    this.mobile = registerForm.value.mobile.trim();
    if (this.name && this.name.length < 3) {
      this.nameValidateMessage = "lengthError";
      num += 1;
    }
    if (!this.name) {
      this.nameValidateMessage = "required";
      num += 1;
    }
    if (this.email && this.validateEmailAddress() == 0) {
      this.emailValidateMessage = "invalid";
      num += 1;
    }
    if (!this.email) {
      this.emailValidateMessage = "required";
      num += 1;
    }
    if (this.isMobileWrong() == 0) {
      this.mobileValidateMessage = "invalid";
      num += 1;
    }
    if (!this.mobile) {
      this.mobileValidateMessage = "required";
      num += 1;
    }
    if (this.mobile && this.mobile.length != 10) {
      this.mobileValidateMessage = "lengthError";
      num += 1;
    }
    
    if (num > 0) {
      return false;
    }
  
}

PostData(registerForm: NgForm) {
  this.onSubmit();
  this.checkValidationMsg(registerForm)
  this.submitStatus = "Submitted Successfully";
  console.log("Registration successfull",this.submitStatus);

}


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent implements OnInit {
signupUsers:any[]=[];
signupobj:any={
  name:'',
  mobile:'',
  email:'',
  password:'',
  confirmpassword:''
};
loginobj:any={
  email:'',
  password:''
}
display: any;
  resendOtp: boolean = false;
  displayTimer: boolean = false;
  nameValidateMessage: string;
  emailValidateMessage: string;
  mobileValidateMessage: string;
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData) {
      this.signupUsers = JSON.parse(localData);
    }
  }
onSignup(){
this.signupUsers.push(this.signupobj);
localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
this.signupobj={
  name:'',
  mobile:'',
  email:'',
  password:'',
  confirmpassword:''
};
}
onLogin(){

const isUserExist = this.signupUsers.find(m => m.email == this.loginobj.email && m.password == this.loginobj.password);
if(isUserExist != undefined){
alert('User loged in successfully')
this.router.navigate(['/home']);
}
else{
  alert('User does not exist')
}
}
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
// checkValidationMsg(registerForm: NgForm) {
//   let num: number = 0;
//   this.name = registerForm.value.name.trim();
//   this.email = registerForm.value.email.trim();
//   this.mobile = registerForm.value.mobile.trim();
//   if (this.name && this.name.length < 3) {
//     this.nameValidateMessage = "lengthError";
//     num += 1;
//   }
//   if (!this.name) {
//     this.nameValidateMessage = "required";
//     num += 1;
//   }
//   if (this.email && this.validateEmailAddress() == 0) {
//     this.emailValidateMessage = "invalid";
//     num += 1;
//   }
//   if (!this.email) {
//     this.emailValidateMessage = "required";
//     num += 1;
//   }
//   if (this.isMobileWrong() == 0) {
//     this.mobileValidateMessage = "invalid";
//     num += 1;
//   }
//   if (!this.mobile) {
//     this.mobileValidateMessage = "required";
//     num += 1;
//   }
//   if (this.mobile && this.mobile.length != 10) {
//     this.mobileValidateMessage = "lengthError";
//     num += 1;
//   }
  
//   if (num > 0) {
//     return false;
//   }

// }
// removeErrorMsg(fieldname: string) {
//   if (fieldname == "name") {
//     this.nameValidateMessage = "";
//   }
//   if (fieldname == "email") {
//     this.emailValidateMessage = "";
//   }
//   if (fieldname == "mobile") {
//     this.mobileValidateMessage = "";
//   }
// }

// isMobileWrong(){
//   let firstDigit = this.mobile.substr(0, 1);
//   if (firstDigit != '6' && firstDigit != '7' && firstDigit != '8' && firstDigit != '9') {
//     return 0;
//   }
//   else if (this.mobile.match(/^(\d)\1+$/g)) {
//     return 0;
//   }
//   else {
//     return 1;
//   }
// }

start(minute) {
  this.displayTimer = true;
  this.resendOtp = false;
  // let minute = 1;
  let seconds = minute * 60;
  let textSec: any = '0';
  let statSec = 60;

  const prefix = minute < 10 ? '0' : '';

  const timer = setInterval(() => {
    seconds--;
    if (statSec != 0) statSec--;
    else statSec = 59;

    // if (statSec < 10) textSec = "0" + statSec;
    // textSec = statSec;

    if (statSec < 10) {
      // console.log('inside', statSec);
      textSec = '0' + statSec;
    } else {
      // console.log('else', statSec);
      textSec = statSec;
    }

    // this.display = prefix + Math.floor(seconds / 60) + ":" + textSec;
    this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

    if (seconds == 0) {
       console.log('finished');
      clearInterval(timer);
      this.resendOtp = true;
      this.displayTimer = false;
    }
  }, 1000);
}

}

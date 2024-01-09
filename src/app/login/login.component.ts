import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
Otploginobj:any={
  email:'',
  otp:''
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
onOtplogin(){
  const isUserExist = this.signupUsers.find(m => m.email == this.Otploginobj.email && m.otp == this.Otploginobj.otp);
  if(isUserExist != undefined){
  alert('User loged in successfully')
  this.router.navigate(['submit']);
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

  

//   myOTP:any =1234;
//   email: string ="";
//   otp: any ="";
//   password: string ="";
//   loginStatus: string='';
//   // reCAPTCHAToken: string = "";
//   //   tokenVisible: boolean = false;

//   // timeLeft: any = "";
//   display: any;
//   resendOtp: boolean = false;
//   displayTimer: boolean = false;


//   mobileValidateMessage: string;
//   MobileDisplayLabel: any;
//   emailValidateMessage: string;
//   formInput = ['input1', 'input2', 'input3', 'input4'];
//   @ViewChildren('formRow') rows: any;
//   loginform: any;
 

//   constructor(private router: Router) {
//     this.loginform = this.toFormGroup(this.formInput);
//     this.start(1);
//   }
//   toFormGroup(elements) {
//    const group: any = {};
//    elements.forEach(key => {
//      group[key] = new FormControl('', Validators.required);
//    });
//    return new FormGroup(group);
//   }

//   ngOnInit(): void {
//     document.getElementById("email").style.display = 'block';
//     document.getElementById("pass").style.display = 'block';
//     document.getElementById("loginLink").style.display = 'block';
//     document.getElementById("Enterotp").style.display = 'none';
//     document.getElementById("sachin").style.display = 'none';
//     document.getElementById("loginStatus").style.display = 'none';
//   }

//   onClickOtp(){
//     document.getElementById("Enterotp").style.display = 'none';
//     document.getElementById("email").style.display = 'block';
//     document.getElementById("pass").style.display = 'none';
//     document.getElementById("loginLink").style.display = 'none';
//     document.getElementById("sachin").style.display = 'block';
//     document.getElementById("continue_btn").style.display = 'none';
//     document.getElementById("loginStatus").style.display = 'none';
//   }
//   sendOtp(){
//     document.getElementById("Enterotp").style.display = 'flex';
//     document.getElementById("sachin").style.display = 'none';
//     document.getElementById("continue_btn").style.display ='block';
//     document.getElementById("loginStatus").style.display = 'none';
//     // document.getElementById("this.startTimer();").style.display = 'block'; 
//     }

//     // onButtonClick(): void {
//     //   this.router.navigate(['/new-page']);
//     // }

  


//   removeErrorMsg(fieldname: string) {
    
//    if (fieldname == "email") {
//       this.emailValidateMessage = "";
//     }
//   }
//   validateEmailAddress() {
//     if (this.email) {
//       var lastChars = this.email.lastIndexOf(".");
//       var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
//       if (!expression.test(String(this.email).toLowerCase()) || this.email.substr(lastChars, 3).length < 3) {
//         return 0;
//       }
//       else {
//         return 1;
//       }
//     }
//   }
//   checkValidationMsg(loginForm: NgForm) {
//     let num: number = 0;
//     this.email = loginForm.value.email.trim();
   
 
//     if (this.email && this.validateEmailAddress() == 0) {
//       this.emailValidateMessage = "invalid";
//       num += 1;
//     }
//     if (!this.email) {
//       this.emailValidateMessage = "required";
//       num += 1;
//     }
    
    
//     if (num > 0) {
//       return false;
//     }
//     {
//       this.router.navigate(['submit']);
//     }

//     // GetData(loginForm: NgForm) {
//     //   console.log("line 119",this.otp,this.myOTP)
      
//       if(this.otp == this.myOTP){
//       document.getElementById("loginStatus").style.display = 'block';
//         this.loginStatus = "success";
//       }  
// }
//   GetData(loginForm: NgForm) {
//     console.log("line 119",this.otp,this.myOTP)
    
//     // if(this.otp == this.myOTP){
//     // document.getElementById("loginStatus").style.display = 'block';
//     //   this.loginStatus = "success";
    

//   //   this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
//   //     this.tokenVisible = true;
//   //     this.reCAPTCHAToken = `Token [${token}] generated`;
//   // });
//   }




//   numbersOnly(event) {
//     var reg = /^[0-9]+$/;
//     return (reg.test(event.key));
//   };

 
//   keyUpEvent(event, index) {
//     let pos = index;
//     if (event.keyCode === 4 && event.which === 4) {
//      pos = index - 1 ;
//     } else {
//      pos = index + 1 ;
//     }
//     if (pos > -1 && pos < this.formInput.length ) {
//      this.rows._results[pos].nativeElement.focus();
//     }
//   }
// // Set the timer for 15 seconds
// start(minute) {
//   this.displayTimer = true;
//   this.resendOtp = false;
//   // let minute = 1;
//   let seconds = minute * 60;
//   let textSec: any = '0';
//   let statSec = 60;

//   const prefix = minute < 10 ? '0' : '';

//   const timer = setInterval(() => {
//     seconds--;
//     if (statSec != 0) statSec--;
//     else statSec = 59;

//     // if (statSec < 10) textSec = "0" + statSec;
//     // textSec = statSec;

//     if (statSec < 10) {
//       // console.log('inside', statSec);
//       textSec = '0' + statSec;
//     } else {
//       // console.log('else', statSec);
//       textSec = statSec;
//     }

//     // this.display = prefix + Math.floor(seconds / 60) + ":" + textSec;
//     this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

//     if (seconds == 0) {
//        console.log('finished');
//       clearInterval(timer);
//       this.resendOtp = true;
//       this.displayTimer = false;
//     }
//   }, 1000);
// }
}

  



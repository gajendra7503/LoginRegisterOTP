import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.scss']
})
export class OTPformComponent implements OnInit {
  otp:any;
  display: any;
  resendOtp: boolean = false;
  displayTimer: boolean = false;
  emailAddress: string = "";
  redirectToPage: string = "./submit";
  OtpValidateMessage:string =''
  emailValidateMessage2: string;
  PasswordValidateMessage:string = '';
 

  

  constructor() { }

  ngOnInit() {
    document.getElementById("Enterotp").style.display = 'none';
    document.getElementById("loginlink").style.display = 'none';
     document.getElementById("loginbtn").style.display = 'none';
   
  }
  // onClickOtp(){
       
  //       document.getElementById("email").style.display = 'block';
  //      document.getElementById("loginLink").style.display = 'none';
  //       document.getElementById("sachin").style.display = 'block';
  //       document.getElementById("loginbtn").style.display = 'none';
  //       // document.getElementById("loginStatus").style.display = 'none';
  //     }
      sendOtp(){
        document.getElementById("Enterotp").style.display = 'flex';
        document.getElementById("sachin").style.display = 'none';
        document.getElementById("loginbtn").style.display ='block';
        //.getElementById("").style.display = 'none';
         document.getElementById("timer").style.display = 'block';
        
         }
        OtpLogin(OtpForm: NgForm){
          this.redirectTo();
        }
      
        redirectTo() {
          window.location.href = this.redirectToPage;
      }
      
      removeErrorMsg(fieldname: string) {
       
        if (fieldname == "emailAddress") {
          this.emailValidateMessage2 = "";
        }
      }
      
      numbersOnly(event) {
        var reg = /^[0-9]+$/;
        return (reg.test(event.key));
      };
      
      checkValidationMsg3(OtpForm: NgForm) {
        let num: number = 0;
        //this.otp = OtpForm.value.otp.trim();
        this.emailAddress =OtpForm.value.emailAddress.trim();
        if (this.otp && this.otp.length < 6) {
          this.OtpValidateMessage = "lengthError";
          num += 1;
        }
      
      
        if (!this.otp) {
          this.OtpValidateMessage = "required";
          num += 1;
        }
        if (this.emailAddress && this.validateEmailAddress() == 0) {
          this.emailValidateMessage2 = "invalid";
          num += 1;
        }
        if (!this.emailAddress) {
          this.emailValidateMessage2 = "required";
          num += 1;
        }
        if (num > 0) {
          return false;
        }
        return
      }
      checkValidationMsg2(OtpForm: NgForm) {
        let num: number = 0;
        //this.otp = OtpForm.value.otp.trim();
        this.emailAddress =OtpForm.value.emailAddress.trim();
        if (this.otp && this.otp.length < 6) {
          this.OtpValidateMessage = "lengthError";
          num += 1;
        }
      
      
        if (!this.otp) {
          this.OtpValidateMessage = "required";
          num += 1;
        }
        if (this.emailAddress && this.validateEmailAddress() == 0) {
          this.emailValidateMessage2 = "invalid";
          num += 1;
        }
        if (!this.emailAddress) {
          this.emailValidateMessage2 = "required";
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
      
          if (statSec < 10) textSec = "0" + statSec;
          textSec = statSec;
      
          if (statSec < 10) {
            // console.log('inside', statSec);
            textSec = '0' + statSec;
          } else {
            // console.log('else', statSec);
            textSec = statSec;
          }
      
           this.display = prefix + Math.floor(seconds / 60) + ":" + textSec;
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login"
  constructor(private formBuilder: FormBuilder) { }
  formSubmitted!:boolean;
  formControls!:any;
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    });
    this.formControls = this.loginForm.controls;
  }
  handleFormSubmmit(event){
     // tslint:disable-next-line: no-unused-expression
     this.formSubmitted = true;
     if ( this.loginForm.invalid ){
       return;
     }
     else{
      const obj = this.loginForm.value;
      if(localStorage.getItem("email")==obj.email && localStorage.getItem("password")==obj.password)
      {
        alert("You Are Successfully Logined");
      }
      else{
        alert("Wrong email/password!! Try by signup");
      }
     }
  }
}

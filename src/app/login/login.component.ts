import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  public erreur:String=""
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
    let loginFormControls = {
      email: new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(8)
      ])
    }
    this.loginForm= formBuilder.group(loginFormControls)
  }
  get email() {return this.loginForm.get('email')}
  get password() {return this.loginForm.get('password')}
  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  public erreur:String=""
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
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
    let token = localStorage.getItem("mytoken")
    if (token)
    this.router.navigateByUrl('/dashboard'); 
  }

  loginUser()
  {
    let data = this.loginForm.value
    this.http.post<any>("https://localhost:44338/Users",data)
    .subscribe(
      (result) => {
       console.log(result)
       let token = result.token
       localStorage.setItem("mytoken",token)
       this.router.navigateByUrl('/dashboard'); 
      },
      (err) => { console.log(err) 
        this.erreur=err.error.message
      }
    )
  }

}

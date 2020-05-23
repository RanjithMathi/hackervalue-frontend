import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router: Router,private toaster: ToastrService) { }
  loginModel = new  LoginModel(); 
  ngOnInit(): void {
    this.loginService.isShow = false;
  }
  onLogin(){
    console.log("this.login : ",this.loginModel);

    if(this.loginModel.username != undefined && this.loginModel.password != undefined){

    if(this.loginModel.username == "admin"){
      this.toaster.success("Loggedin as "+this.loginModel.username,"LogggedIn")
      this.router.navigate(['/dashboard'])
    }else{
      this.toaster.success("Loggedin as "+this.loginModel.username,"LogggedIn")
    this.router.navigate(['/testView'])
    }
  }else{
    this.toaster.error("Please provide username and password","Login message")
  }
}

}

export class LoginModel {
  public username: string;
  public password: string;
}
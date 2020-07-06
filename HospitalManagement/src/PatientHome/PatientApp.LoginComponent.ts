import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import {CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot} from "@angular/router"
import {HttpClient} from "@angular/common/http";
import {User} from "./PatientApp.LoginModel";


@Component({
  selector: 'app-root',
  templateUrl: './PatientApp.LoginComponent.html',
})

export class LoginComponent {
 // public userObj:User;
 //Create userObj global
  constructor(public http:HttpClient,public userObj:User,
  public routing:Router){

  }
  Login(){
    //calll to mvc post
    this.http.post("https://localhost:44347/api/Security",this.userObj)
     .subscribe(res=>this.Success(res),
     res=>this.Error(res));
  }
 Success(res){
  this.userObj.token=res.token;
  this.routing.navigate(["Home"]);
}
Error(res){
  alert(res);
  }
}

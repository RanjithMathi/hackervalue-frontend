import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public isShow : boolean = false; 

  sideBarshow(){
    this.isShow = true;
  }
}

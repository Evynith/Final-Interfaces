import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static _login: boolean = false;
  constructor() { }

  static saveLogin(log: boolean){
    this._login = log;
  }

  static islogin() {
    return this._login;
  }
}

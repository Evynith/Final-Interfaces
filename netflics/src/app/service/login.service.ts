import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static _login: boolean = false;
  constructor() { }

  static set login(log: boolean){
    this._login = log;
  }

  static get login() {
    return this._login;
  }
}

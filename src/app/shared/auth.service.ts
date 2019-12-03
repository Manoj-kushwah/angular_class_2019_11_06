import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private login: boolean;
  constructor() { }

  /**
   * isLogin
   */
  public isLogin(): boolean {
    return this.login;
  }

  /**
   * setLogin
   */
  public setLogin(login: boolean) {
    this.login = login;
  }
  
}

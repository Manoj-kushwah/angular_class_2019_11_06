import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private static _instance: AppComponent;
  static getInstance(): AppComponent{
    return this._instance;
  }
  public title = 'angulartest';
  private uiBtnLogout: boolean = false;
  private uiBtnLogin: boolean = true;

  constructor(){
    AppComponent._instance = this;
  }

  ngOnInit(){
    console.log("AppComponent: ", AppComponent.getInstance());
    this.setUiBtnLogin(true);
    this.setUiBtnLogout(false);
  }

  /**
   * setUiBtnLogout
   */
  public setUiBtnLogout(logout: boolean) {
    this.uiBtnLogout = logout;
  }

  /**
   * isUiBtnLogout
   */
  public isUiBtnLogout(): boolean {
    return this.uiBtnLogout;
  }
  /**
   * setUiBtnLogin
   */
  public setUiBtnLogin(login: boolean) {
    this.uiBtnLogin = login;
  }

  /**
   * isUiBtnLogin
   */
  public isUiBtnLogin(): boolean {
    return this.uiBtnLogin;
  }
}

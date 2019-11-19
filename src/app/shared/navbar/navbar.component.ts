import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private home: boolean = true;
  private about: boolean = true;
  private contact: boolean = true;
  private login: boolean = false;
  private logout: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  /**
   * showLogin
   */
  public showLogin(v: boolean): void {
    this.login = v;
  }

  /**
   * isLogin
   */
  public isLogin(): boolean {
    return this.login;
  }
  
  /**
   * showLogin
   */
  public showLogout(v: boolean): void {
    this.logout = v;
  }

  /**
   * isLogin
   */
  public isLogout(): boolean {
    return this.logout;
  }
  
}

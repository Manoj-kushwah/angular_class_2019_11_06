import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Input('input1') private input: string;

  @Output('out1') private out: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.out.emit('navbarInit');
  }

  /**
   * clickToH1($event)
   */
  public clickToH1($event) {
    this.out.emit('clickNavbarH1');
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angulartest';
  public sampleList: string[] = ['Sample item'];
  public searchQuery: string;
  @ViewChild('appNav') public appNav: NavbarComponent; //ElementRef;
  constructor() { }

  ngOnInit() {
    this.appNav.showLogin(true);
    //this.appNav.showLogout(true);
    console.log(this.appNav);
  }

  /**
   * removeFromSampleList
   */
  public removeFromSampleList(index: number) {
    console.log('index: ', index);
    this.sampleList.splice(index, 1);
  }

  /**
   * addInToSampleList
   */
  public addInToSampleList(item: string) {
    console.log('item: ', item);
    this.sampleList.unshift(item);
  }

}

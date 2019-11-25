import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { DataMapService } from '../shared/data-map.service';

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
  constructor(private dataMap: DataMapService) { }

  ngOnInit() {
    console.log('dataMap: ', this.dataMap);
    this.appNav.showLogin(true);
    //this.appNav.showLogout(true);
    console.log(this.appNav);
    this.sampleList = this.dataMap.nameList;
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

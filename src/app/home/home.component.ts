import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userList: any[];
  constructor(private http: Http){

  }
  ngOnInit(){
  }

  /**
   * getUserListData
   */
  public getUserListData() {
    this.http.get('https://jsistudentportal.000webhostapp.com/api/user/get/')
      .toPromise()
      .then((res) => {
        console.log('res: ', res);
        this.userList = res.json();
        console.log('userList: ', this.userList);
        return res;
      }).catch((err) => {
        console.error('err: ', err);
        return err;
      });
  }
}
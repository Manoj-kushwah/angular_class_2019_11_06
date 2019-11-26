import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public templateNo: number = 0;
  ngOnInit(){
    setInterval(()=>{
      if (this.templateNo>=4) {
        this.templateNo = 0;
      }
      this.templateNo++;
    }, 2 * 1000);
  }
}

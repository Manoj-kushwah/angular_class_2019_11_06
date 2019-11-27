import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { ListFilterPipe } from '../shared/list-filter.pipe';
import { DataMapService } from '../shared/data-map.service';

@NgModule({
  declarations: [HomeComponent, ListFilterPipe],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    HomeRoutingModule,
    NavbarModule
  ],
  providers: [
    DataMapService
  ]
})
export class HomeModule { }

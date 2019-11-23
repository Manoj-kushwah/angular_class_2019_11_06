import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { ListFilterPipe } from '../shared/list-filter.pipe';

@NgModule({
  declarations: [HomeComponent, ListFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NavbarModule
  ]
})
export class HomeModule { }

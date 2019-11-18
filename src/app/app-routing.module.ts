import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

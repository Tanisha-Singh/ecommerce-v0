import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {CartComponent} from './cart/cart.component';
import {ProductlistComponent} from './productlist/productlist.component';

const routes: Routes = [
  {path:'home-page',component:HomePageComponent},
  {path:'cart',component:CartComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'', redirectTo:'home-page',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

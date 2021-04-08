import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},//Hiçbir şey verilmezse product componenti aç.Anasayfa yani
  {path:"products",component:ProductComponent},//products yazarsa yine product componenti aç.
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

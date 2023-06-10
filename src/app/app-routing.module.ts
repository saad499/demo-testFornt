import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './connexion/sign-in/sign-in.component';
import { SignUpComponent } from './connexion/sign-up/sign-up.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'data-table',component:DataTableComponent},
  {path:'uploader',component:UploaderComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

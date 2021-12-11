import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { HomePageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "products/product/details/:id",
    component: ProductDetailComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "customers",
    component: CustomersComponent
  },
  {
    path: "customers/customer/details/:id",
    component: CustomerDetailsComponent
  },
  {
    path: "customers/customer/adding",
    component: CustomerAddComponent
  },
  {
    path:"products/product/add",
    component:ProductAddComponent
  }
  ,
  {
    path:"",
    component:HomePageComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

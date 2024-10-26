import { NgModule } from '@angular/core';
import { Component } from '@angular/core';


import {ProductComp} from '../products/product.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [
    ProductComp
  ],
  imports: [
    SharedModule,
  ],
  exports:[
    ProductComp
  ]
})
export class ProductsFeatureModule { }

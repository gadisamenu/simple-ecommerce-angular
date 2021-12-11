import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { get_id, Product, PRODUCTS } from '../products/product.objects';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private route:Router) { }
  products = PRODUCTS;

  ngOnInit(): void {
  }
  AddProduct(f:NgForm):void{
    let product:Product={
      id:get_id(),
      name:f.value['name'],
      price:f.value['price'],
      imageUrl:f.value['imageUrl'],
      description:f.value['description']
    }
    this.products.push(product);
    this.route.navigateByUrl('products')
  }

}

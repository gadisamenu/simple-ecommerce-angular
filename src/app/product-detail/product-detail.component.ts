import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.objects';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products = PRODUCTS;
  selected_pro: Product | undefined;

  constructor(private route: ActivatedRoute,private router:Router) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.products) {
          if (product.id == param['id']) {
            this.selected_pro = product
          }
        }
      }
    )
  }
  updateProduct(f: NgForm): void {
    if (this.selected_pro != undefined) {
      this.selected_pro.name = f.value.productname
      this.selected_pro.price = f.value.productprice
    }
    this.router.navigateByUrl('products')
  }

}

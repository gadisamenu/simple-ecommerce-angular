import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PRODUCTS } from './product.objects';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList = PRODUCTS;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("here i am")
  }
  delete(id:number):void{
    this.productList = this.productList.filter(p => p.id != id)
  }
}
                 
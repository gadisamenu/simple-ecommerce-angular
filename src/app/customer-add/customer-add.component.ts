import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOMERS, Customers, get_id } from '../customers/customers.objects';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  customers = CUSTOMERS;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  create(f: NgForm): void {
    let customer:Customers = {
      id: get_id(),
      name: f.value['name'],
      email: f.value['email'],
      age: f.value['age'],
      sex: f.value['sex'],
      address: f.value['address'],
    }
    this.customers.push(customer)
    this.router.navigateByUrl('customers')
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customers, CUSTOMERS, get_id } from '../customers/customers.objects';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers = CUSTOMERS;
  selectedCustomer: Customers | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let customer of this.customers) {
          if (customer.id == param['id']) {
            this.selectedCustomer = customer
          }
        }
      }
    );
  }
  updateCustomer(f: NgForm): void {
    if (this.selectedCustomer != undefined) {
      this.selectedCustomer.name = f.value['name']
      this.selectedCustomer.email = f.value['email']
      this.selectedCustomer.age = f.value['age']
    }
  }
  deletethis(id: number) {
    this.customers = this.customers.filter(c => c.id != id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from './customers.objects';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  customerlist = CUSTOMERS;
  
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
  }
  deletethis(id:number){
    this.customerlist = this.customerlist.filter(c => c.id != id);
  }

  // 

}

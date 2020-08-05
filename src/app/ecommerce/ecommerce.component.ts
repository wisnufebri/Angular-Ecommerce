import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../_services/ecommerce.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  ecommerces: any;
  currentEcommerce = null;
  currentIndex = -1;
  nama = '';
  harga = '';

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.retrieveEcommerce();
  }

  retrieveEcommerce(): void {
    this.ecommerceService.getAll()
    .subscribe(
      data => {
        this.ecommerces = data;
        console.log(data);
      }, 
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveEcommerce();
    this.currentEcommerce = null;
    this.currentIndex = -1;
  }

  setActiveEcommerce(ecommerce, index): void {
    this.currentEcommerce = ecommerce;
    this.currentIndex = index;
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  template: './product-alerts.component.html',
  styleUrls: ['./product-alerts-component.css'],
})
export class ProductAlertsComponents implements OnInit {
  
  @Input() products!: Product;
  constructor() {}

  ngOnInit() {}
}

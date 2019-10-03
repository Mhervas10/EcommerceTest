import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: 'Green tea',
      price: 3.11,
      id: 'GR1'
    },
    {
      name: 'Strawberries',
      price: 5,
      id: 'SR1'
    },
    {
      name: 'Coffee',
      price: 11.23,
      id: 'CF1'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared!');
  }
  addToCart(product) {
    
    this.cartService.addToCart(product);
  }
}

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
      id: 'GR1',
      counter: 0
    },
    {
      name: 'Strawberries',
      price: 5,
      id: 'SR1',
      counter: 0
    },
    {
      name: 'Coffee',
      price: 11.23,
      id: 'CF1',
      counter: 0
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {

  }

  discounts(productIdName) {

      if (productIdName == 'GR1'){
        window.alert('This product has a buy-one-get-one-free offer!');
      }else if (productIdName == 'SR1'){
        window.alert('If you buy 3 or more, the price would drop to £4.50!');
      }else if (productIdName == 'CF1'){
        window.alert('If you buy 3 or more, this product has a 66% of the original price discount!');
      }
    }
  addToCart(product) {
    console.log('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  deleteFromCart(product) {
    console.log('Your product has been deleted from the cart!');
    this.cartService.deleteFromCart(product);
  }
}

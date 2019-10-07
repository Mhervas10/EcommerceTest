import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  
  constructor(
    private http: HttpClient
  ) {}
  addToCart(product) {

    if(product.counter === 0){
      product.counter++;
      this.items.push(product);
      
    }else if(product.counter > 0){
      
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].id === product.id){
          this.items[i].counter++;
        }else{}
      }
    }
    console.log(this.items);
    this.checkSale(product);
  }
  checkSale(product){
    for(var i = 0; i < this.items.length; i++){
      if(this.items[i].id === 'SR1' && this.items[i].counter > 2 && product.id === 'SR1'){
        this.items[i].price = 4.5;
        this.items[i].sales = true;
      }else if (this.items[i].id === 'CF1' && this.items[i].counter > 2 && product.id === 'CF1'){
        this.items[i].price = (11.23 * 2 / 3).toFixed(2);
        this.items[i].sales = true;
      }else if (this.items[i].id === 'GR1' && this.items[i].counter >= 2 && product.id === 'GR1'){
        this.items[i].sales = true;
        if(this.items[i].counter%2 == 0){
        this.items[i].price = 1.55;       
        }
        else{
        this.items[i].price = 1.55;
        let oddCounter = 3.11;
        this.items[i].price + oddCounter;
        }
      }
    }
  }
  deleteFromCart(product) {

    if(product.counter === 0){
      this.items.splice(product);
      
    }else if(product.counter > 0){
    
      for(var i = 0; i < this.items.length; i++){
        if(this.items[i].id === product.id){
          this.items[i].counter--;
        }else{}
      }
    }
    console.log(this.items);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}


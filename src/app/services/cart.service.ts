import { Injectable } from '@angular/core';
import { CarDto } from '../models/carDto';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(cardto: CarDto) {
    let item = CartItems.find((c) => c.cardto.carId === cardto.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.cardto = cardto;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }

  removeFromCart(cardto:CarDto){
    let item:CartItem = CartItems.find((c) => c.cardto.carId === cardto.carId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  allBrands(){

  }

  allColors(){
    
  }

}

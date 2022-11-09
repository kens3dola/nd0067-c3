import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { OrderLine } from '../models/OrderLine';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private ordered: BehaviorSubject<Order>;
  constructor() {}

  getCart(): OrderLine[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(orderline: OrderLine) {
    const cart = this.getCart();
    const existing = cart.find((ol) => orderline.product.id == ol.product.id);
    if (existing) existing.quantity += orderline.quantity;
    else cart.push(orderline);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  saveCart(cart: OrderLine[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  submitCart(order: Order) {
    if (!this.ordered) this.ordered = new BehaviorSubject(order);
    else this.ordered.next(order);
  }

  getConfirmation() {
    return this.ordered;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { isNumber } from 'src/app/common/validators';
import { OrderLine } from 'src/app/models/OrderLine';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: OrderLine[] = [];
  total: number = 0.0;

  fullname: string;
  address: string;
  cardnumber: string;

  myForm = new FormGroup({
    numVal: new FormControl('', [isNumber]),
  });

  constructor(private cartSvc: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartSvc.getCart();
    this.calculateTotal();
  }

  updateQuantity() {
    this.calculateTotal();
    this.cartSvc.saveCart(this.cart);
  }

  private calculateTotal() {
    if (this.cart.length) {
      this.total =
        Math.round(
          this.cart
            .map((ol) => ol.product.price * ol.quantity)
            .reduce((total, each) => total + each) * 100
        ) / 100;
    }
  }

  removeItem(id: number) {
    this.cart = this.cart.filter((ol) => ol.product.id != id);
    this.cartSvc.saveCart(this.cart);
    this.total = 0;
    alert('Removed item from cart!');
  }

  submitCart() {
    this.cartSvc.submitCart({
      fullname: this.fullname,
      address: this.address,
      cardnumber: this.cardnumber,
      total: this.total,
    });
    this.cartSvc.saveCart((this.cart = []));
    this.router.navigate(['/confirm']);
  }
}

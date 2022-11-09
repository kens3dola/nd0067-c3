import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderLine } from 'src/app/models/OrderLine';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() clicked: EventEmitter<OrderLine> = new EventEmitter();
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number = 1;
  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    this.clicked.emit({
      product: this.product,
      quantity: +this.quantity,
    });
    alert('Added to cart');
    this.quantity = 1;
  }
}

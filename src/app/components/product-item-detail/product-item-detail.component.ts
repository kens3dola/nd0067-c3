import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Input() product!: Product;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  quantity: number = 1;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) =>
      this.productService.getProducts().subscribe((res) => {
        const prd = res.find((p) => p.id == data['id']);
        if (prd) this.product = prd;
      })
    );
  }

  addToCart() {
    this.cartService.addToCart({
      product: this.product,
      quantity: +this.quantity,
    });
    alert('Added to cart');
    this.quantity = 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { OrderLine } from 'src/app/models/OrderLine';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => (this.products = res));
  }

  addToCart(ol: OrderLine) {
    this.cartService.addToCart(ol);
  }
}

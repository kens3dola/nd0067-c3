# C3

## Infor

### Routes:

- /products: product list
- /products/:id: product details
- /cart: view cart
- /comfirmation: after submit order

### App components:

- cart
- confirmation
- product-item
- product-item-details
- product-list

### Models:

- Product:{id:number,name: string,price: number,url: string,description: string}
- OrderLine: {product: Product, quantity: number}

### Service:

- ProductService: fetch product json data
- CartService: handle add/remove product in cart

## Install and run

1.  Run `npm install -g @angular/cli`
2.  Run `npm i`
3.  Run `ng serve --open`

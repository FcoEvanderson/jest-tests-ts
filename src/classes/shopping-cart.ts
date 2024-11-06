import { Discount } from "./discount"
import { ProductItem } from "./interfaces/productItem"
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol"

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _products: ProductItem[] = []

  constructor(private readonly discount: Discount) {}


  get products(): Readonly<ProductItem[]>{
    return this._products
  }

  addProduct(product: ProductItem): void {
    this._products.push(product)
  }

  removeProduct(indexProduct: number): void {
    this._products.splice(indexProduct, 1)
  }

  total(): number {
    return +this._products.reduce((total, next) => total + next.price, 0)
      .toFixed(2)
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total())
  }

  isEmpty(): boolean {
    return this._products.length === 0
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo.')
    this._products.length = 0
  }
}

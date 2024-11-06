import { ProductItem } from "./productItem"

export interface ShoppingCartProtocol {

  products: Readonly<ProductItem[]>
  addProduct(product: ProductItem): void
  removeProduct(indexProduct: number): void
  total(): number
  totalWithDiscount(): number
  isEmpty(): boolean
  clear(): void

}

export class ShoppingKart {
  private readonly products: Product[] = []

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product)
    }
  }

  amountProducts(): number {
    return this.products.length
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0)
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('T-shirt', 49.9)
const product2 = new Product('Cup', 22.9)
const product3 = new Product('Pen', 1.9)
const product4 = new Product('typewriter', 249.9)

const shoppingkart1 = new ShoppingKart()
shoppingkart1.insertProduct(product1, product2, product3, product4)
console.log(shoppingkart1.totalValue())
console.log(shoppingkart1.amountProducts())

import { Messaging } from "./services/message"
import { Order } from "./classes/order-status"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { ShoppingCart } from "./classes/shopping-cart"
import { FiftyPercentDiscount, NoDiscount } from "./classes/discount"
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer"
// import { MessagingProtocol } from "./classes/interfaces/messaging-protocol"

const fiftydiscount = new FiftyPercentDiscount()
const noDiscount = new NoDiscount()

const shoppingCart1 = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer(
  'Fco',
  'Evan',
  '000.000.000-00'
)
const enterpriseCustomer = new EnterpriseCustomer(
  'Casas Bahia',
  '01345678934567'
)

// class MessagingMock implements MessagingProtocol {
//   sendMessage(): void {
//     console.log('A mensagem foi enviada pelo mock.')
//   }
// }

// const messageMock = new MessagingMock()

const order = new Order(shoppingCart1, messaging, persistency, enterpriseCustomer)

shoppingCart1.addProduct(new Product('Shirt', 40.0))
shoppingCart1.addProduct(new Product('Coke', 9.0))
shoppingCart1.addProduct(new Product('Book', 37.0))
shoppingCart1.addProduct(new Product('cup', 14.0))
// shoppingCart1.clear()

console.log(shoppingCart1.products)
console.log(shoppingCart1.total())
console.log(shoppingCart1.totalWithDiscount())
console.log(order.orderStatus)
order.checkout()
console.log(order.orderStatus)

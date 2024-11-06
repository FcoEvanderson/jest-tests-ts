import { OrderStatus } from "./interfaces/order-status";
import { OrderCostumer } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = 'open'

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: OrderCostumer,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho Vazio')
      return
    }
    this._orderStatus = 'closed'
    this.messaging.sendMessage(
      `Seu pedido com total de R$ ${this.cart.totalWithDiscount()} reais, foi recebido.`
    )
    this.persistency.saveOrder()
    this.cart.clear()

    console.log(this.customer.getName(), this.customer.getIDN())
  }

}

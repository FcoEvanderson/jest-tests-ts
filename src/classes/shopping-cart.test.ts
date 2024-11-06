import { Discount } from "./discount"
import { ProductItem } from "./interfaces/productItem"
import { ShoppingCart } from "./shopping-cart"

const createSut = () => {
  class DiscountMock extends Discount {}
  const discountMock = createDiscountMock()
    const sut = new ShoppingCart(discountMock)
    return {sut, discountMock}
}

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock()
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements ProductItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price)
}

const createSutWithProducts = () => {
  const {sut, discountMock} = createSut()
  const cartItem1 = createCartItem('Camisa', 40)
  const cartItem2 = createCartItem('Caderno', 12)
  sut.addProduct(cartItem1)
  sut.addProduct(cartItem2)
  return { sut, discountMock }
}

describe('ShoppingCart', () => {
  afterEach(() => jest.clearAllMocks())

  it('should be an empty cart when no product is added', () => {
    const {sut} = createSut()
    expect(sut.isEmpty()).toBe(true)
  })

  it('should have 2 car items', () => {
    const { sut } = createSutWithProducts()
    expect(sut.products.length).toBe(2)
  })

  it('should test total and totalWithDescount', () => {
    const {sut} = createSutWithProducts()
    expect(sut.total()).toBe(52)
    expect(sut.totalWithDiscount()).toBe(52)
  })

  it('should add products and clear cart', () => {
    const {sut} = createSutWithProducts()
    expect(sut.products.length).toBe(2)
    sut.clear()
    expect(sut.products.length).toBe(0)
    expect(sut.isEmpty()).toBe(true)
  })

  it('should remove products', () => {
    const {sut} = createSutWithProducts()
    expect(sut.products.length).toBe(2)
    sut.removeProduct(1)
    expect(sut.products.length).toBe(1)
    sut.removeProduct(0)
    expect(sut.isEmpty()).toBe(true)
  })

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts()
    const discountMockSpy = jest.spyOn(discountMock, 'calculate')
    sut.totalWithDiscount()
    expect(discountMockSpy).toHaveBeenCalledTimes(1)
  })

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts()
    const discountMockSpy = jest.spyOn(discountMock, 'calculate')
    sut.totalWithDiscount()
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total())
  })
})

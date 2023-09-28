

export type Amount = number

export type CartId = string

export type CustomerId = string


export interface Cart {
  id: CartId,
  customerId: CustomerId,
  amount: Amount
}

export type DiscountRule = (cart: Cart) => Amount

export const MissingCart: Cart = {
  id: "",
  customerId: "",
  amount: 0
}

export const NoDiscount: DiscountRule = (c: Cart): Amount => {
  throw 'IllegalStateException'
}

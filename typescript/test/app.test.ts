
import { expect, describe, it } from 'vitest'
import { CartId, Cart } from '../src/models'
import { applyDiscount } from '../src/app'
import { SpyStorage } from './stub/storage'

describe('Functional Refactoring', () => {

  it('Happy Path', () => {
    const cartId: CartId = 'some-gold-cart' 
    const storage = new SpyStorage()
  
    applyDiscount(cartId, storage)
  
    const expected: Cart = {
      id: 'some-gold-cart',
      customerId: 'gold-customer',
      amount: 50
    }
    
    expect(storage.saved).toEqual(expected)

  })

  
  it('No discount', () => {
    const cartId: CartId = 'some-normal-cart' 
    const storage = new SpyStorage()
  
    applyDiscount(cartId, storage)
  
    expect(storage.saved).toBeUndefined()

  })

  it('Missing Cart', () => {
    const cartId: CartId = 'missing-cart' 
    const storage = new SpyStorage()
  
    applyDiscount(cartId, storage)
  
    expect(storage.saved).toBeUndefined()

  })
})

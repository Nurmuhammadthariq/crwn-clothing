import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/customButton.component'
import CartItem from '../cart-item/cartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './cartDropdown.styles.scss'

const cartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateProps)(cartDropdown)

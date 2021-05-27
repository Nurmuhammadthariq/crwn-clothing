import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishablekey =
    'pk_test_51IvE6bJGyXpc5VqWG76FatCV6Mk6F0NcINV9R3ipAK4iVNO9UIwHSk2TYca2Wgb0voiRON55nLATWIg8cAR8AiFz00lgT7Oa8X'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successfull!!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWM Clothing LTD.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  )
}

export default StripeCheckoutButton

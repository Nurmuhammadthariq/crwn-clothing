import React from 'react'

import SignIn from '../../components/sign-in/signIn.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './signInAndSignUp.styles.scss'

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage

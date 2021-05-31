import React from 'react'

import SignIn from '../../components/sign-in/signIn.component'
import SignUp from '../../components/sign-up/sign-up.component'

import { SignInAndSignUpContainer } from './signInAndSignUp.styles'

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignInAndSignUpPage

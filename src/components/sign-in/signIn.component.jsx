import React, { Component } from 'react'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-button/customButton.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { SignInContainer, ButtonBarContainer } from './sign-in.styles'

class signIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} className='form-signIn'>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
            required
          />
          <ButtonBarContainer>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </ButtonBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default signIn

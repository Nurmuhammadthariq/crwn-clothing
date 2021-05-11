import React, { Component } from 'react'

import FormInput from '../form-input/formInput.component'
import CustomButton from '../custom-button/customButton.component'

import './signIn.styles.scss'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {}

  render() {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have a account</h2>
        <span>Sign Up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Your Password'
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp

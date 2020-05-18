import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

export class SignIn extends Component {

    constructor(props) {
        super(props);
         this.state = {
             email:'',
             password:''
         }
    }

    handleSubmit = event => {

        event.preventDefault();

        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const { value, name} =event.target;
        this.setState({ [name]: value })
    }
    
    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit="{this.handleSubmit}">
                    <FormInput 
                        name='email' 
                        label='Email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required
                    />
                   
                    <FormInput 
                        name='password' 
                        label='Password' 
                        handleChange={this.handleChange} 
                        type='password' 
                        value={this.state.password} 
                        required
                    />
                    
                    <Button type='submit' value='Submit Form'>Sign In </Button>
                   

                </form>
            </div>
        )
    }
}

export default SignIn

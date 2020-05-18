import React, { Component } from 'react'
import moduleName from './sign-up.styles.scss'

import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            displayName:'',
            confirmPassword:''
        }
        
    }
    
    handleSubmit = event => {

        event.preventDefault();

        const{ displayName,email,password,confirmPassword } = this.state;

        if (password != confirmPassword) {
            alert("Password dont match");
            return;
        }

        try {
            // CHECK IF THE USER EXIST

            // ADD USER
        } catch (error) {
            
        }

        this.setState({email:'', password:'', displayName: '', confirmPassword:''});
    }

    handleChange = async event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    render() {

        const{ displayName,email,password,confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I don not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                        name='displayName' 
                        label={displayName} 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        name='email' 
                        label='Email' 
                        handleChange={this.handleChange} 
                        value={email} 
                        required
                    />
                    <FormInput 
                        name='password' 
                        label='Password' 
                        handleChange={this.handleChange} 
                        type='password' 
                        value={password} 
                        required
                    />

                    <FormInput 
                        name='confirmPassword' 
                        label='Password' 
                        handleChange={this.handleChange} 
                        type='password' 
                        value={confirmPassword} 
                        required
                    />
                    

                    <Button type='submit' value='Submit Form'>Sign Up </Button>
                </form>
                
            </div>
        )
    }
}

export default SignUp

import React, { Component } from 'react'
import './sign-up.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import {api} from '../../api/api.url';
import {URL} from '../../configs/api.configs';

import {setCurrentUser} from '../../redux/user/user.actions';

import {connect} from 'react-redux'



export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            name:'',
            confirmPassword:''
        }
        
    }
    
    handleSubmit = event => {

        event.preventDefault();

        const { setCurrentUser } = this.props;

        const{ name,email,password,confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password doesn't match");
            return;
        }

        try {
            // CHECK IF THE USER EXIST            
        
            // const { setCurrentUser } = this.props;
            const data = {
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            name: name
            };
            
            api(URL.users.register, data).then( res => {

                if (res.message === 'CREATED') {

                    api(URL.users.login, data).then( res => {

                        if (res.message !== 'Unauthorized') {
                            setCurrentUser(res.token);
                        }
                        
                    })
                
                }
                
            })
            // ADD USER
        } catch (error) {
            
        }

        this.setState({email:'', password:'', name: '', confirmPassword:''});
    }

    handleChange = async event => {
        const {value, name} = event.target;
        this.setState({[name]:value})
    }
    render() {

        const{ name,email,password,confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className="title">I don not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput 
                        name='name' 
                        label='Name' 
                        handleChange={this.handleChange} 
                        value={name} 
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
                        label='Confirm Password' 
                        handleChange={this.handleChange} 
                        type='password' 
                        value={confirmPassword} 
                        required
                    />
                    

                    <CustomButton type='submit' value='Submit Form'>Sign Up </CustomButton>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignUp)

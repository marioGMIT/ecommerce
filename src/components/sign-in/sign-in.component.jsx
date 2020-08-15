import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {connect} from 'react-redux'
import {setCurrentUser} from '../../redux/user/user.actions';


import {api} from '../../api/api.url';
import {URL} from '../../configs/api.configs';

export class SignIn extends Component {

    constructor(props) {
        super(props);
         this.state = {
             email:'',
             password:''
         }
    }

    handleSubmit = async event => {

        event.preventDefault();

        const { email, password } = this.state;   
        
        const { setCurrentUser } = this.props;
        const data = {
        email: email,
        password: password,
        };       

         
        api(URL.users.login, data).then( res => {

            if (res.message === 'Unauthorized') {
              console.log('Unauthorized');
            }else{
              setCurrentUser(res.token);
      
            }
            
          })

        try {
                      

            this.setState({ email: '', password: '' });
          } catch (error) {
            console.log(error);
          }
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

                <form onSubmit={this.handleSubmit}>
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
                    
                    <CustomButton type='submit' value='Submit Form'>Sign In </CustomButton>
                   

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(SignIn)

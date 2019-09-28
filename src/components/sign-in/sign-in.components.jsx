import React from 'react';
import FormInput from '../form-input/form-input.components';
import Custombutton from '../custom-button/custom-button.components';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    handelSubmit = event =>{
        event.preventDefault();
        this.setState={email:'', password:''}
    }

    handelChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput 
                    name="email" 
                    type="email"
                    label="email"
                    handleChange={this.handelChange} 
                    value={this.state.email} required/>
                    <FormInput 
                    name="password" 
                    type="password"
                    handelChange={this.handelChange}
                    label= "password" 
                    value={this.state.password} 
                    required/>
                    <div className='buttons'>
                        <Custombutton type='submit'> Sign In </Custombutton>
                        <Custombutton onClick={signInWithGoogle} isGoogleSignIn> 
                        Sign In with Google</Custombutton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
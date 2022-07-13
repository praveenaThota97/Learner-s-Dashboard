import React, {Component} from 'react';
import './signup.css';
class signUp extends Component{
    render(){
        return(
            <div className="signInDiv">
                <header>
                    <p className='heading'><strong>Hero Vired</strong></p>
                    <p className='pageDEsc'><strong>Sign Up</strong></p>
                </header>
                <div className='userSignInForm'>
                    <h3>Sign Up Details</h3>
                    <form>
                        <label htmlFor="userName">Username</label><br/>
                        <input type="text" id="userName" name="userName" placeholder='Enter Username'></input><br/><br/>
                        <label htmlFor="passWord">Password</label><br/>
                        <input type="text" id="passWord" name="passWord" placeholder='Enter Password'></input><br/><br/>
                        <label htmlFor="emailID">Email Address</label><br/>
                        <input type="text" id="emailID" name="emailID" placeholder='Enter Email'></input><br/><br/>
                        <button id="signInButton">Sign Up</button>
                    </form>
                    <p>Already have an account <span><a href=" ">Login</a></span></p>
                </div>   
            </div>
        )
    }
}
export default signUp;
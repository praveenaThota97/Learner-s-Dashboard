import React, {Component} from 'react';
import './login.css';
class login extends Component{
    render(){
        return(
            <div className="loginDiv">
                <header>
                    <p className='heading'><strong>Hero Vired</strong></p>
                    <p className='pageDEsc'><strong>Login Page</strong></p>
                </header>
                <div className='userLoginForm'>
                    <h3>Login Details</h3>
                    <form action="/login" method="GET">
                        <label htmlFor="userName">Username</label><br/>
                        <input type="text" id="userName" name="userName" placeholder='Enter Username'></input><br/><br/>
                        <label htmlFor="passWord">Password</label><br/>
                        <input type="text" id="passWord" name="passWord" placeholder='Enter Password'></input><br/><br/>
                        <button id="loginButton">Login</button>
                    </form>
                    <p>Don't have an account <span><a href="signup.js">SignUp</a></span></p>
                </div>   
            </div>
        )
    }
}
export default login;
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './login.scss';

const Login = () => {

  const [loginError, setLoginError] = useState(''); 
  return (
    <main>
    <section id="login">
      <div className="container login__container">
        <div className="login__form__container">
          <div className="heading container">
            <h2>Login</h2>
          </div>
          <div className="login__with__google">
            <img src="assets/images/login_google.svg" alt="" />
          </div>

          <form id="login__form" action="dashboard/index.html" method="post">
            <div className="form__row has__block__label">
              <label htmlFor="login__username"> Username </label>
              <input type="email"
               name="login__username" 
               id="login__username" 
               placeholder=""
               />
              <label htmlFor="login__username" className="error" id="username__error"> </label>
            </div>

            <div className="form__row has__block__label">
              <label htmlFor="login__password"> Passowrd </label>
              <input type="password" 
              name="login__password" 
              id="login__password"
              placeholder="" 
              />
              <label  htmlFor="login__password" className="error" id="password__error"></label>
            </div>

            <div id="login__error" className="login__error form__error">
              
            </div>

            <div className="action__message form__row">
              {
                loginError && <p className="loginError">{loginError}</p>
              }

            </div>

            <div className="send">
              <button className="send">Login</button>
            </div>

            <div className="new__register">
              <p>
                
                  Don't have an account ?
                  
                  <Link className='toogle__auth_option' to="/register">Register</Link>

              </p>
            </div>
          </form>
        </div>
      </div>
    </section>

  </main>
  )
}

export default Login

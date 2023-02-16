import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  return (
    <main>
    <section id="login">
      <div className="container login__container">
        <div className="login__form__container">
          <div className="heading container">
            <h2>Register</h2>
          </div>

          <div className="login__with__google">
            <img src="assets/images/login_google.svg" alt="" />
          </div>

          <form action="" name="register__form" id="register__form">
            <div className="form__row">
              <label for="names">Names</label>
              <input onkeyup="return validateName()" type="text" name="names" id="names"  placeholder="" />
              <label for="names" className="error_down" id="name__error"></label>

            </div>

            <div className="form__row">
              <label for="email">Email</label>
              <input onkeyup="validateEmail()" type="text" name="email" id="email" placeholder="" />
              <label for="email" className="error_down" id="email__error"></label>

            </div>

            <div className="form__row">
              <label for="password"> Passowrd </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
              <label for="password" className="error_down" id="password__error"></label>
            </div>

            <div className="form__row">
              <label for="confirm__password">Confirm passowrd</label>
              <input
                type="password"
                name="confirm__password"
                id="confirm__password"
                placeholder=""
              />
            </div>

            <div className="action__message form__row">
              {
                registerError && <p className="registerError">{registerError}</p>

              }
            </div>

            <div className="send">
              <button className="send" type="submit">Register</button>
            </div>

            <div className="new__register">
              <p>
                Alredy have an account ? 
                <Link className='toogle__auth_option' to='/login'>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Register

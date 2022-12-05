import './style.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Facebook</h3>
          <span className="loginDesc">Connect with friends and the world around you on Facebook.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder='Email' type="email" className="loginInput" />
            <input placeholder='password' type="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Creat A new Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
import './style.css'

const Register = () => {
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
            <input placeholder='confirm password' type="password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <div className="loginOr">
              <hr className='loginHr'/>
              <span>OR</span>
              <hr className='loginHr'/>
            </div>
            <button className="loginRegisterButton">Log In to your Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores itaque culpa temporibus
            
            dolor saepe assumenda nihil ipsum,
          </p>
          <span>Don't have an acount?</span>
          <button>Register?</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

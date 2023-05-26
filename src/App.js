import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Welcome Back!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>

        <a href="#">Forgot password?</a>
        <a href="#">Create a new account</a>

        <button className="loginBut">
          <p>Login</p>
        </button>

       
      </div>
    </div>
  );
}

export default App;
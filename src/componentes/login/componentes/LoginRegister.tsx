import "../CSS/LoginRegister.css";

const LoginRegister = () => {
  return (
    <div className="selector-tabs">
  <label className="tab-option">
    <span className="tab-label">Login</span>
    <input type="radio" name="auth-toggle" value="Login" checked className="tab-radio" />
  </label>
<label className="tab-option">
    <span className="tab-label">Register</span>
    <input type="radio" name="auth-toggle" value="Register" className="tab-radio" />
  </label>
</div>
  )
}

export default LoginRegister

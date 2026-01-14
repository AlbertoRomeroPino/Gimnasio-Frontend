import "../CSS/CampoRellenable.css";

const CampoRellenable = () => {
  return (
    <div className="form-fields">
  <div className="input-group">
    <label className="field-label">Email</label>
    <input type="email" placeholder="Enter your email" className="text-input" />
  </div>

  <div className="input-group">
    <label className="field-label">Password</label>
    <div className="password-container">
      <input type="password" placeholder="Enter your password" className="text-input pass-input" />
      <button type="button" className="toggle-visibility">
        <span className="material-symbols-outlined">visibility</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default CampoRellenable

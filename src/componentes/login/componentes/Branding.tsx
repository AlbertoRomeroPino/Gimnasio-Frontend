import "../CSS/Branding.css";

const Branding = () => {
  return (
    <div className="brand-container">
  <div className="logo-wrapper">
    <img src="../public/GymGeniusLogo.svg" alt="Gym Logo" className="brand-logo" />
    </div>
  <h1 className="brand-title">Gym Management</h1>
</div>
  );
};

export default Branding;

import './style.css';

function Imprint() {
  return (
    <div className="imprint">
      <div className="site-policy-links">
        <div className="site-policies-left">
          <a href="#0" className="policy-link">
            User Agreement
          </a>
          <a href="#0" className="policy-link">
            Privacy Policy
          </a>
        </div>
        <div className="site-policies-right">
          <a href="#0" className="policy-link">
            Content Policy
          </a>
          <a href="#0" className="policy-link">
            Moderator Code of Conduct
          </a>
        </div>
      </div>
      <div className="copyright">
        For entertainment and educational purposes only. No rights reserved.
      </div>
    </div>
  );
}

export default Imprint;

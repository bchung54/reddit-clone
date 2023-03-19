import { useAuth } from 'contexts/AuthContext';
import { useOverlay } from 'contexts/OverlayContext';
import './style.css';

export default function HeaderButtons() {
  const { currentUser } = useAuth();
  const { setOverlay } = useOverlay();
  const handleClick = (e) => {
    setOverlay(e.target.value);
  };
  if (!currentUser) {
    return (
      <div className="header-buttons">
        <button
          className="signup-button"
          type="button"
          value="signup"
          onClick={handleClick}
        >
          Sign Up
        </button>
        <button
          className="login-button"
          type="button"
          value="login"
          onClick={handleClick}
        >
          Log In
        </button>
      </div>
    );
  }
}

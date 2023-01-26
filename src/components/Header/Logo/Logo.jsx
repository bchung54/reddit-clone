import logoImg from 'assets/images/reddit_logo_new.svg';
import './style.css';

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="reddit-logo" />
    </div>
  );
}

export default Logo;

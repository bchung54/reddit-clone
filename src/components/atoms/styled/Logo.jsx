import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../styles/atoms/logo.css';

function Logo() {
  return (
    <div className="logo">
      <FontAwesomeIcon className="icon" icon={['fab', 'fa-reddit']} />
    </div>
  );
}

export default Logo;

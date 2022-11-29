import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function ActionIcon(props) {
  const { type } = props;
  switch (type) {
    case 'primary':
      return (
        <FontAwesomeIcon className="icon" icon={['fas', 'fa-align-justify']} />
      );
    case 'comment':
      return <FontAwesomeIcon className="icon" icon={['far', 'fa-message']} />;
    case 'share':
      return <FontAwesomeIcon className="icon" icon={['fas', 'fa-share']} />;
    case 'save':
      return <FontAwesomeIcon className="icon" icon={['far', 'fa-bookmark']} />;
    case 'hide':
      return (
        <FontAwesomeIcon className="icon" icon={['far', 'fa-eye-slash']} />
      );
    case 'report':
      return <FontAwesomeIcon className="icon" icon={['far', 'fa-flag']} />;
    default:
      return null;
  }
}

ActionIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ActionIcon;

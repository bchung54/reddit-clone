import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import removeHttp from '../functions/removeHttp';
/* import '../styles/Title.css'; */

function Title(props) {
  const { title, link } = props;
  const abridgedLink = removeHttp(link);
  const domainLastIndex = abridgedLink.indexOf('/');
  return (
    <div className="title">
      <h3>{title}</h3>
      <a href={link}>
        {abridgedLink.slice(0, domainLastIndex + 6)}
        ...
      </a>
      <FontAwesomeIcon icon={['fas', 'up-right-from-square']} />
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Title;

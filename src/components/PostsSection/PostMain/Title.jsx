import { BsBoxArrowUpRight } from 'react-icons/bs';
import PropTypes from 'prop-types';
import removeHttp from 'utils/removeHttp';

function Title(props) {
  const { title, type, content } = props;
  const abridgedLink = removeHttp(content);
  const domainLastIndex = abridgedLink.indexOf('/');
  return (
    <div className="title">
      <h3>{title}</h3>
      {type !== 'text' && content && (
        <a href={content}>
          {`${abridgedLink.slice(0, domainLastIndex + 6)}... `}
          <BsBoxArrowUpRight className="icon" />
        </a>
      )}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Title;

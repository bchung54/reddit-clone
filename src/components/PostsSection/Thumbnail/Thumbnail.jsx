import PropTypes from 'prop-types';
import { TiDocumentText } from 'react-icons/ti';
import { FiExternalLink } from 'react-icons/fi';
import './style.css';

function Thumbnail({ type, image }) {
  if (type === 'image') {
    return (
      <div
        className="thumbnail"
        style={{
          background: `url(${image}) center center / cover no-repeat`,
        }}
      />
    );
  }
  switch (type) {
    case 'external':
      return (
        <div className="thumbnail">
          <FiExternalLink />
        </div>
      );
    default:
      return (
        <div className="thumbnail">
          <TiDocumentText />
        </div>
      );
  }
}

Thumbnail.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Thumbnail;

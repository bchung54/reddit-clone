import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../styles/atoms/thumbnail.css';

function Thumbnail() {
  return (
    <div className="thumbnail">
      <FontAwesomeIcon icon={['fas', 'align-justify']} />
    </div>
  );
}

export default Thumbnail;

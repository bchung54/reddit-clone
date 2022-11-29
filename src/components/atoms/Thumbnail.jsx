import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/thumbnail.css';

function Thumbnail() {
  return (
    <div className="thumbnail">
      <FontAwesomeIcon icon={['fas', 'align-justify']} />
    </div>
  );
}

export default Thumbnail;

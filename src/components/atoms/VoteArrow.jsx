import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/atoms/voteArrow.css';

function VoteArrow({ direction }) {
  return (
    <div className={`arrow-${direction}`}>
      <FontAwesomeIcon
        className="icon"
        icon={['fas', `fa-arrow-${direction}`]}
      />
    </div>
  );
}

VoteArrow.propTypes = {
  direction: PropTypes.oneOf(['up', 'down']).isRequired,
};

export default VoteArrow;

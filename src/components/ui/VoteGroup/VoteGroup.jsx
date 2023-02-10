import PropTypes from 'prop-types';
import countDisplay from 'utils/countDisplay';
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb';
import './style.css';

function VoteGroup({ votes, inline }) {
  const voteDisplay = votes === 0 ? 'Vote' : countDisplay(votes);
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className={`vote-arrows${inline ? '-inline' : ''}`}>
      <TbArrowBigTop className="arrow-up" onClick={handleClick} />
      <span className="vote-count">{voteDisplay}</span>
      <TbArrowBigDown className="arrow-down" onClick={handleClick} />
    </div>
  );
}

VoteGroup.propTypes = {
  votes: PropTypes.number.isRequired,
  inline: PropTypes.bool,
};

VoteGroup.defaultProps = {
  inline: false,
};

export default VoteGroup;

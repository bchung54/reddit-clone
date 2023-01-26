import PropTypes from 'prop-types';
import countDisplay from 'utils/countDisplay';
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb';
import './style.css';

function VoteGroup(props) {
  const { votes } = props;
  const voteDisplay = votes === 0 ? 'Vote' : countDisplay(votes);
  return (
    <div className="vote-arrows">
      <TbArrowBigTop className="arrow-up" />
      <div className="vote-count">{voteDisplay}</div>
      <TbArrowBigDown className="arrow-down" />
    </div>
  );
}

VoteGroup.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default VoteGroup;
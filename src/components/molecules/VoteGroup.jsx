import PropTypes from 'prop-types';
import VoteArrow from '../atoms/VoteArrow';
import countDisplay from '../../functions/countDisplay';

function VoteGroup(props) {
  const { votes } = props;
  const voteDisplay = votes === 0 ? 'Vote' : countDisplay(votes);
  return (
    <div className="vote-arrows">
      <VoteArrow direction="up" />
      <div className="vote-count">{voteDisplay}</div>
      <VoteArrow direction="down" />
    </div>
  );
}

VoteGroup.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default VoteGroup;

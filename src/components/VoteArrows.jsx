import PropTypes from 'prop-types';
import Upvote from './atoms/Upvote';
import Downvote from './atoms/Downvote';
import countDisplay from '../functions/countDisplay';
import '../styles/voteArrows.css';

function VoteArrows(props) {
  const { votes } = props;
  const voteDisplay = countDisplay(votes);
  return (
    <div className="vote-arrows">
      <Upvote />
      <div className="vote-count">{voteDisplay}</div>
      <Downvote />
    </div>
  );
}

VoteArrows.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default VoteArrows;

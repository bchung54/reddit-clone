import PropTypes from "prop-types";
import ActionIcon from "./atoms/ActionIcon";
import ActionText from "./atoms/ActionText";
import "../styles/action.css";

function Action({ type, commentCount }) {
  return (
    <div className={`action ${type}`}>
      <ActionIcon type={type} />
      {type !== "primary" && (
        <ActionText type={type} commentCount={commentCount} />
      )}
    </div>
  );
}

Action.propTypes = {
  type: PropTypes.string.isRequired,
  commentCount: PropTypes.number,
};

Action.defaultProps = {
  commentCount: 0,
};

export default Action;

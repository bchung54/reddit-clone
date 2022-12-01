import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Downvote() {
  return (
    <div className="arrow-down">
      <FontAwesomeIcon className="icon" icon={["fas", "fa-arrow-down"]} />
    </div>
  );
}

export default Downvote;

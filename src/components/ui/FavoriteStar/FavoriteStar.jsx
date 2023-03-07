import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import './style.css';

function FavoriteStar() {
  const [fill, setFill] = useState();
  const handleClick = (event) => {
    event.stopPropagation();
    setFill(!fill);
  };
  return (
    <button className="favorite-btn" type="button" onClick={handleClick}>
      {fill ? <BsStarFill className="filled" /> : <BsStar />}
    </button>
  );
}

export default FavoriteStar;

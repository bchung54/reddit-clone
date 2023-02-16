import { useSubreddit } from 'contexts/SubredditContext';
import { useEffect, useState } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { SlClose } from 'react-icons/sl';
import './style.css';

export default function SearchBar() {
  const subreddit = useSubreddit();
  const [filter, setFilter] = useState(subreddit);
  const handleCloseFilter = () => {
    setFilter(null);
  };
  useEffect(() => {
    setFilter(subreddit);
  }, [subreddit]);
  return (
    <div className="search-bar">
      <form autoComplete="off">
        <label htmlFor="header-search-bar">
          <HiOutlineMagnifyingGlass className="icon" />
          {filter && filter.name !== 'popular' && (
            <div className="search-pill">
              <img alt="subreddit-icon" src={filter.icon} />
              <span>{`r/${filter.name}`}</span>
              <SlClose className="icon" onClick={handleCloseFilter} />
            </div>
          )}
          <input
            type="search"
            id="header-search-bar"
            placeholder="Search Reddit"
          />
        </label>
      </form>
    </div>
  );
}

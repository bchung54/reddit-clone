import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SubredditContext = React.createContext();
const SubredditUpdateContext = React.createContext();
const blankSubreddit = {
  name: 'popular',
  title: 'title',
  icon: 'url',
  color: 'rgb(0,0,0)',
  textColor: 'rgb(255,255,255)',
  bannerURL: 'url',
  about: 'About',
  dateCreated: 'Jan 1, 2000',
  subscribers: '0m',
  online: '0k',
  flairs: [{ text: 'text', color: '#color' }],
  rules: [
    {
      heading: 'Rule 1',
      subtext: 'Rule Description',
    },
  ],
  navbarLinks: ['Posts'],
};

export function useSubreddit() {
  return useContext(SubredditContext);
}

export function useSubredditUpdate() {
  return useContext(SubredditUpdateContext);
}

export function useBlankSub() {
  const setSubreddit = useSubredditUpdate();
  useEffect(() => {
    setSubreddit(blankSubreddit);
  });
}

export function SubredditProvider({ children }) {
  const [subreddit, setSubreddit] = useState(blankSubreddit);
  /* const subredditProviderValue = useMemo(
    () => ({ subreddit, setSubreddit }),
    [subreddit]
  ); */
  return (
    <SubredditContext.Provider value={subreddit}>
      <SubredditUpdateContext.Provider value={setSubreddit}>
        {children}
      </SubredditUpdateContext.Provider>
    </SubredditContext.Provider>
  );
}

SubredditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

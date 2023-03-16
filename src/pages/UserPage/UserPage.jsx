import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { PostsSection } from 'components/PostsSection';
import { defaultPosts } from 'data/defaultPosts';
import { ProfileSidebar } from './ProfileSidebar';

import './style.css';

function UserPage() {
  const { userName } = useParams();
  const tabs = ['overview', 'posts', 'comments', 'gilded'];
  const posts = defaultPosts.filter((post) => post.username === userName);
  const location = useLocation();
  const userPageRoot = `/user/${userName}/`;
  let currentRoot = userPageRoot;
  useEffect(() => {
    tabs.forEach((tabName) => {
      if (location.pathname.includes(`/${tabName}/`)) {
        currentRoot = `/user/${userName}/${tabName}/`;
      }
    });
  }, [location]);

  /*   const activeLinkStyle = {
    color: 'var(--reddit-blue)',
    borderBottomStyle: 'solid',
  };
  const inactiveLinkStyle = {
    color: 'inherit',
    borderBottomStyle: 'none',
  }; */
  return (
    <main className="user">
      <div className="header">
        {tabs.map((tab, index) => {
          return (
            <NavLink
              to={`${userPageRoot}${tab}/`}
              className={
                index === 0 && location.pathname === `${currentRoot}`
                  ? 'active'
                  : 'pending'
              }
              end
              key={tab}
            >
              {tab[0].toUpperCase() + tab.slice(1)}
            </NavLink>
          );
        })}
      </div>
      <div className="main-content">
        <PostsSection
          root={currentRoot}
          postList={posts}
          sortByList={['hot', 'new', 'top']}
        />
        <ProfileSidebar />
      </div>
      <Outlet />
    </main>
  );
}

export default UserPage;

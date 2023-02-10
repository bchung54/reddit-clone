import { Routes, Route } from 'react-router-dom';

// Icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Pages
import { Home } from 'pages/Home';
import { Popular } from 'pages/Popular';
import { SubredditPage } from 'pages/Subreddit';

// Components
import { Header } from 'components/Header';
import { GuestSidebar } from 'components/Sidebar';

// Styles
import './App.css';
import { PostThread } from 'pages/PostThread';

// This exports the whole icon packs for Brand and Solid.
library.add(far, fas, fab);

function App() {
  return (
    <div className="App">
      <Header />
      <GuestSidebar />
      <Routes>
        <Route path="/*">
          <Route index element={<Popular />} />
          {/* TODO: routing for homepage */}
          <Route path="r/*">
            <Route path="home/*" element={<Home />} />
            <Route path="popular/*" element={<Popular />} />
            <Route path=":subredditName/*" element={<SubredditPage />}>
              <Route path="comments/:postId/*" element={<PostThread />} />
            </Route>
          </Route>
        </Route>
        {/* <Route path="*" element={<div className="notfound">Not Found</div>} /> */}
      </Routes>
    </div>
  );
}

export default App;

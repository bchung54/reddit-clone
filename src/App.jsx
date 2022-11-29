/* import logo from './logo.svg'; */
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import PostListItem from './components/PostListItem';

// This exports the whole icon packs for Brand and Solid.
library.add(far, fas);

function App() {
  return (
    <div className="App">
      <PostListItem />
    </div>
  );
}

export default App;

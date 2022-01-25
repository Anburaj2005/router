import './App.css';
import Delete from './pages/delete';
import Get from './pages/get';
import Create from './pages/Post';
import UpdatePost from './pages/update';
import Error from './pages/error';
import Instance from './pages/instance';
import Synpost from './pages/syn post';

function App() {
  return (
    <div className="App">
      <Get/>
      <Create/>
      <UpdatePost/>
      <Delete/>
      <Error/>
    <Instance/>
    <Synpost/>
    </div>
  );
}

export default App;

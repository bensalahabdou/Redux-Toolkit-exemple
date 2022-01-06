import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import PostDetails from './posts/postDetails';

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/post/:id" element={<PostDetails />}/>
      </Routes>
    </div>
  );
}

export default App;

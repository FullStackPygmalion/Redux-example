import React from 'react';

import './App.css';
import PostForm from './components/postForm'
import AllPost from './components/allPost'

function App() {
  return (
    <div className="App">
      <PostForm />
      <AllPost />
    </div>
  );
}

export default App;

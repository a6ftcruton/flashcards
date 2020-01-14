import React from 'react';
import './App.css';

import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card
        title='Test title'
        desc='testing a longish description here eventually it will be data'
      />
    </div>
  );
}

export default App;

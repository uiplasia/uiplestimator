import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentComponent from './components/ParentComponent';
import './custom-scrollbar.css';


function App() {
  return (
    <div className="App" >
      <ParentComponent/>
    </div>
  );
}

export default App;
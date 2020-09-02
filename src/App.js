import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../src/components/Form/Form'
import AlreadyField from './components/Form/Signin'

function App() {
  return (
    <div className="App">
 <AlreadyField/>
      <Form/>
    </div>
  );
}

export default App;

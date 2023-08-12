import './App.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import Albums from './components/Albums';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/albums" element={<Albums/>} />
        </Routes>
       </BrowserRouter>
    );
  }
}

export default App;

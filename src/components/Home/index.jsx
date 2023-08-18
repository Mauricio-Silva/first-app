import './styles.css';
import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../routes/Home';
import CardsPage from '../../routes/Cards';
import AlbumsPage from '../../routes/Albums';


class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cards" element={<CardsPage/>} />
          <Route path="/albums" element={<AlbumsPage/>} />
        </Routes>
       </BrowserRouter>
    );
  }
}

export default Home;
